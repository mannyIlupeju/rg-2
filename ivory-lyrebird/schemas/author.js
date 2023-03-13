import { defineField, defineType } from "@sanity/types"
import { listsToObj } from "prelude-ls"

export default defineType({
  //templates accept an array of initial value template objects
  name: 'author',
  type: 'document',
  title: 'Author',
  //types = accepts an array of schema definition objects
  fields: [
    defineField({ 
      name: 'name',
      type: 'string',
      title: 'Name'
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