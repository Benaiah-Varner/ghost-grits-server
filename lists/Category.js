const { text } = require('@keystone-next/fields');
const { list } = require('@keystone-next/keystone/schema');

const Category = list({
  fields: {
    name: text({ isRequired: true }),
  },
});

module.exports = Category;
