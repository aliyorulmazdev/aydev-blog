export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      type: 'image',
      title: 'Avatar',
      validation: (Rule) => Rule.required(),
    },
  ],
}
