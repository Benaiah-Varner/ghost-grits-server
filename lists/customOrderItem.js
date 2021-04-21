const { list } = require('@keystone-next/keystone/schema');
const { text } = require('@keystone-next/fields');
const { Relationship } = require('@keystonejs/fields');

const customOrderItem = list({
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
    order: {
        type: Relationship,
        ref: 'Order.customItems'
    }
  },
});

module.exports = customOrderItem;
