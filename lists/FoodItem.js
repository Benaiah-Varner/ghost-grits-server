const { text, integer } = require('@keystone-next/fields');
const { Relationship } = require('@keystonejs/fields');
const { list } = require('@keystone-next/keystone/schema');

const FoodItem = list({
  access: {
    read: true,
    update: true,
    delete: () => true,
    create: () => true
  },
  fields: {
    name: text({
      isRequired: true,
    }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    price: integer(),
    category: {
      type: Relationship,
      ref: 'Category',
    },
  },
});

module.exports = FoodItem;
