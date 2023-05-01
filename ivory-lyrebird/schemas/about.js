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
      name: 'aboutInfo',
      type: 'string',
      title: 'About Us'
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
     name: 'bio',
     title: 'Bio',
     type: 'array',
     of: [
       {
         title: 'Block',
         type: 'block',
         styles: [{title: 'Normal', value: 'normal'}],
         lists: [{title: 'Bullet', value: 'bullet'}],
       },
     ],
     
   })
  ]
})