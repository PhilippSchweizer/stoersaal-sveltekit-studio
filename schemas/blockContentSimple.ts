import {defineType, defineArrayMember} from 'sanity'
import {CgInternal} from 'react-icons/cg'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content Simple',
  name: 'blockContentSimple',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [{title: 'Absatz', value: 'normal'}],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'Interner Link',
            name: 'internalLink',
            type: 'object',
            icon: CgInternal,
            fields: [
              {
                title: 'Referenz',
                name: 'reference',
                type: 'reference',
                to: [{type: 'post'}, {type: 'page'}],
              },
            ],
          },
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
  ],
})
