const { Relationship, Select } = require('@keystonejs/fields');
const { list } = require('@keystone-next/keystone/schema');
const { text, integer } = require('@keystone-next/fields');


const Salad = list({
  access: {
    read: true,
    update: true,
    delete: () => true,
    create: () => true
  },
  fields: {
    name: text({
      defaultValue: 'Build Your Own Salad',
    }),
    description: text({
      defaultValue: 'Romaine Leaves, Spring Mix Greens, Swiss C',
    }),
    choice_of_dressing: text(),
    choice_of_two_toppings: text(),
    category: {
      type: Relationship,
      ref: 'Category',
    },
    price: integer(),
  },
});

module.exports = Salad;
