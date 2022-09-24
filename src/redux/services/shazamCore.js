import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
      prepareHeaders: (headers) => {
        headers.set('X-RapidAPI-Key', 'a778d05fa3msh7f06a904bd9b70cp1254f5jsn1bb58489d9fa');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/charts/world'}),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;