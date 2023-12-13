import { defineConfig, isDev } from 'sanity'
import { shopifyAssets } from 'sanity-plugin-shopify-assets'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  projectId: 'foypmm2m',
  dataset: 'production',
  plugins: [
    shopifyAssets({
      shopifyDomain: 'quickstart-b83ae816.myshopify.com'
    }),
    deskTool(), 
    visionTool(),
    ...(isDev ? devOnlyPlugins : [])
  ],
    schema: {
      types: schemaTypes,
    },
})

