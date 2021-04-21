const { Relationship } = require('@keystonejs/fields');
const { list } = require('@keystone-next/keystone/schema');
const { text, integer  } = require('@keystone-next/fields');

const Order = list({
  fields: {
    customItems: {
      type: Relationship,
      ref: 'customOrderItem.order',
      many: true,
    },
    fixedItems: {
      type: Relationship,
      ref: 'fixedOrderItem.order',
      many: true,
    },
    firstName: text({ isRequired: true }),
    lastName: text({ isRequired: true }),
    email: text({ isRequired: true }),
    charge: text({ isRequired: true }),
    total: integer({ isRequired: true })
  },
});

module.exports = Order;
