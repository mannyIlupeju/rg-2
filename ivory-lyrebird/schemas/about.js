import { defineField, defineType } from "@sanity/types"
import { listsToObj } from "prelude-ls"

export default defineType({
  //templates accept an array of initial value template objects
  name: 'about',
  type: 'document',
  title: 'About Us',
  //types = accepts an array of schema definition objects
  fields: [
    defineField({ 
      name: 'aboutus',
      title: 'About Us',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      }
    }),
   defineField({
     name: 'post',
     title: 'Post',
     type: 'array',
     of:  [{type: 'block'}, {type: 'image'}],
     options: {
        spellCheck: true,
      }
     
   })
  ]
})