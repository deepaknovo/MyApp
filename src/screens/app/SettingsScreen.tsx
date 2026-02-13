import React, { useEffect, useState } from "react";
import { View, Button, Text, Linking } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

const CLIENT_ID = "22aeddbe-a202-4277-a6ea-0fcebff5266c";
const REDIRECT_URI = "https://myapp-backend-lyx2.onrender.com/callback";
const CLIENT_SECRET = "dmu5h7rj3e";

// const api_secret="dmu5h7rj3e"
// service id from render.com =srv-d671ighr0fns73f17080
//url of backend ="https://dashboard.render.com/web/srv-d671ighr0fns73f17080"

export default function SettingsScreen() {
  const [accessToken, setAccessToken] = useState(null);
const authUrl =
  `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
  // useEffect(() => {
  //   const handleDeepLink = async (event:any) => {
  //     const url = event.url;
  //     console.log(url,"callnabbabab")
  //     if (url.includes("code=")) {
  //       const code = url.split("code=")[1];

  //       // Exchange code for token
  //       const response = await axios.post(
  //         "https://api.upstox.com/v2/login/authorization/token",
  //         {
  //           code,
  //           client_id: CLIENT_ID,
  //           grant_type: "authorization_code",
  //           redirect_uri: REDIRECT_URI,
  //         },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       setAccessToken(response.data.access_token);
  //     }
  //   };

  //   Linking.addEventListener("url", handleDeepLink);

  //   return () => {
  //     Linking.removeAllListeners("url");
  //   };
  // }, []);

  // const connectUpstox = () => {
  //   const authUrl =
  //     `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

  //   Linking.openURL(authUrl);
  // };
 const handleNavigation = async (navState:any) => {
  // code ="fa0BeQ"
  console.log("Navigation State:", navState);
  console.log("Navigated to:", navState.url);
   if (navState.url.includes("access_token=")) {
  const token = navState.url.split("access_token=")[1];
  console.log("Access Token:", token);
  setAccessToken(token);
}
  };

//   const getToken = async () => {
//     const code = "fa0BeQ"; // Replace with actual code from redirect URL
//     const params = new URLSearchParams();
// params.append("code", code);
// params.append("client_id", CLIENT_ID);
// params.append("grant_type", "authorization_code");
// params.append("redirect_uri", REDIRECT_URI);
// params.append("client_secret", CLIENT_SECRET);

// console.log(params.toString());

// const response = await axios.post(
//   "https://api.upstox.com/v2/login/authorization/token",
//   params,
//   {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   }
// );

//         setAccessToken(response.data.access_token);

//       console.log("Access Token:", response.data.access_token);
//   }
  return (
    <View style={{ flex:1,height:"100%"}}>
      {/* <Button title="Connect Upstox" onPress={connectUpstox} />
      {accessToken && <Text>Connected Successfully</Text>} */}

      <WebView 
      onMessage={(event:any) => {
        console.log(event,"hahahah ")
      const token = event.nativeEvent.data;
      setAccessToken(token);
     }}
      
      source={{ uri: authUrl }}
      onNavigationStateChange={handleNavigation}
       />

       {/* <Button title="Connect Upstox" onPress={() => getToken()} /> */}

    </View>
  );
}
