import { defineType, defineField } from "@sanity/types";

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'string'
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    })
  ]
  
})