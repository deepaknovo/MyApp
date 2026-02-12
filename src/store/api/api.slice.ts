import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../index';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation<{ token: string }, void>({
      query: () => ({
        url: '/login',
        method: 'POST',
      }),
    }),

    getPosts: builder.query<any[], void>({
      query: () => '/posts',
    }),
  }),
});

export const {
  useLoginMutation,
  useGetPostsQuery,
} = apiSlice;
