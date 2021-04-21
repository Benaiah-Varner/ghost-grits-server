const { Relationship } = require('@keystonejs/fields');
const { list } = require('@keystone-next/keystone/schema');

const saladCartItem = list({
  access: {
    read: true,
    update: true,
    delete: () => true,
    create: () => true
  },
  fields: {
    salad: {
      type: Relationship,
      ref: 'Salad',
      isRequired: true,
    },
  },
});

module.exports = saladCartItem;
