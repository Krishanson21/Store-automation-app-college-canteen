import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'store',

  projectId: 'ybe7kjfd',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema,
})
