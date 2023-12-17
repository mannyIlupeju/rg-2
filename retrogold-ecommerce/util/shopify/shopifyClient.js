import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
    storeDomain: '301910-4.myshopify.com',
    apiVersion: '2023-10',
    publicAccessToken: process.env.SHOPIFY_PUB,
});

export default client;