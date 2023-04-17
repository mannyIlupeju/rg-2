import { defineType, defineField } from "@sanity/types";

export default defineType ({
    name: 'callToAction',
    title: 'CallToAction',
    type: 'document',
    fields:[
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'string',
        }),
        defineField({
          name: 'sub_headline',
          title: 'Sub_headline',
          type: 'string',
        }),
          defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          }
        })
    ]
})