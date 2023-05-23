import { SlugInput } from "sanity";

const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
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
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },

    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule =>
        Rule.custom((tags) => {
          const lowercaseTags = tags.map(tag => tag.toLowerCase());
          if (lowercaseTags.join() !== tags.join()) {
            return 'Tags should be in lowercase.';
          } else if(tags.some(tag=>tag.charAt(tag.length)===' ')) {
            return 'No space allowed after tag'
          }  
          else if(tags.some(tag=>tag.includes('-'|| '*'))) {
            return 'You cannot add - between Tags'
          }
          return true; // Validation passed
        }),
      options: {
        layout: 'tags',
      },
    },

    {
      title: 'Main Body',
      name: 'body',
      type: 'blockContent',
    },


  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
}

export default post;