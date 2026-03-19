// schemaTypes/post.ts

import { defineType, defineField } from 'sanity';

const postSchema = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please provide a title for the blog'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { 
        source: 'title', 
        maxLength: 96,
        slugify: (input: string) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      },
      validation: (Rule) => Rule.required().error('Please provide a slug'),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array', 
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().error('Please provide content for the blog'),
    }),
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }, // Allows you to crop the image in the dashboard
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
})

export default postSchema;