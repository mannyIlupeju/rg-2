import { defineField, defineType } from "@sanity/types";

export default defineType ({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  of: [{type: Array}],
  fields:[
    defineField({
      name: 'image1',
      title:'Image1',
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