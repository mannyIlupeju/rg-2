import { defineField, defineType } from "@sanity/types";

export default defineType ({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  of: [{type: Array}],
  fields:[
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'image'
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'headstatement',
      title: 'HeadStatement',
      type: 'string',
    })
  ]
})