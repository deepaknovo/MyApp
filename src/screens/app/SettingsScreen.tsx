import React, { useEffect, useState } from "react";
import { View, Button, Text, Linking } from "react-native";
import axios from "axios";

const CLIENT_ID = "22aeddbe-a202-4277-a6ea-0fcebff5266c";
const REDIRECT_URI = "https://myapp-backend-lyx2.onrender.com";

// const api_secret="dmu5h7rj3e"
// service id from render.com =srv-d671ighr0fns73f17080
//url of backend ="https://dashboard.render.com/web/srv-d671ighr0fns73f17080"

export default function SettingsScreen() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const handleDeepLink = async (event:any) => {
      const url = event.url;
      console.log(url,"callnabbabab")
      if (url.includes("code=")) {
        const code = url.split("code=")[1];

        // Exchange code for token
        const response = await axios.post(
          "https://api.upstox.com/v2/login/authorization/token",
          {
            code,
            client_id: CLIENT_ID,
            grant_type: "authorization_code",
            redirect_uri: REDIRECT_URI,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setAccessToken(response.data.access_token);
      }
    };

    Linking.addEventListener("url", handleDeepLink);

    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);

  const connectUpstox = () => {
    const authUrl =
      `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

    Linking.openURL(authUrl);
  };

  return (
    <View style={{ marginTop: 100 }}>
      <Button title="Connect Upstox" onPress={connectUpstox} />
      {accessToken && <Text>Connected Successfully</Text>}
    </View>
  );
}
