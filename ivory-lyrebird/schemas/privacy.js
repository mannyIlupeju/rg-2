import { defineType, defineField } from "@sanity/types";

export default defineType({
  name: 'privacy',
  title: 'Privacy Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ]

})