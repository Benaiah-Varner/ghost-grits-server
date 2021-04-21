const { text } = require('@keystone-next/fields');
const { list, } = require('@keystone-next/keystone/schema');
const { Relationship } = require('@keystonejs/fields');

const fixedOrderItem = list({
  access: {
    read: true,
    update: true,
    delete: () => true,
    create: () => true,
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
      order: {
          type: Relationship,
          ref: 'Order.fixedItems'
      }
  },
});

module.exports = fixedOrderItem;
