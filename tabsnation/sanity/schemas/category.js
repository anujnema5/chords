// ./schemas/category.js

import {defineField, defineType} from 'sanity'

// Install lucide.dev icons with "npm install lucide-react"
import {TagIcon} from 'lucide-react'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({name: 'title', type: 'string'}),
    // defineField({
    //   name: 'parent',
    //   type: 'reference',
    //   to: [{type: 'category'}],
    //   // This ensures we cannot select other "children"
    //   options: {
    //     filter: '!defined(parent)',
    //   },
    // }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),

    defineField({
      name : 'description',
      title : 'Description',
      type : 'text'
    })
  ],
  // Customize the preview so parents are visualized in the studio
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
    },
    prepare: ({title, subtitle}) => ({
      title,
      subtitle: subtitle ? `– ${subtitle}` : ``,
    }),
  },
})