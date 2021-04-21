const { integer } = require('@keystone-next/fields');
const { Relationship } = require('@keystonejs/fields');
const { list } = require('@keystone-next/keystone/schema');

const foodCartItem = list({
  access: {
    read: true,
    update: true,
    delete: () => true,
    create: () => true
  },
  fields: {
    quantity: integer({
      isRequired: true,
      defaultValue: 1,
    }),
    food: {
      type: Relationship,
      ref: 'FoodItem',
      isRequired: true,
    },
  },
});

module.exports = foodCartItem;
