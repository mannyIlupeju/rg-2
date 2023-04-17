import { defineType, defineField } from "@sanity/types";

export default defineType ({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields:[
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'array',
      of:  [{type: 'block'}, {type: 'image'}],
      options: {
        spellCheck: true,
      }
    }),
    defineField({
      name: 'main_image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }
      ]
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        name: 'image',
        title: 'Image',
        type: 'image'
      }],

    }),
    defineField({
      name: 'published',
      title: 'Published At',
      type: 'date'
    })

  ]
})