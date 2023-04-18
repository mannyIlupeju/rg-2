import { defineType, defineField } from "@sanity/types";

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
      source: 'title',
  }
    }),
    defineField({
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: "Price",
      type: 'number',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      of: [{type: Array}],
      options: {
        list: [{value:'small', title:'Small'}, {value:'medium', title:'Medium'}]
      }
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'array',
      of: [{type: 'block'}]
     
    }),
    defineField({
      name: 'productDescription',
      title: 'Product Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name:'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name:'mainImage2',
      title: 'Main Image2',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        hotspot: true,
      },
      of: [{
        name: 'image',
        title: 'Image',
        type: 'image'
      }]
    })
  ]
})