const dotenv = require('dotenv').config();
const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const FoodItem = require('./lists/FoodItem');
const Category = require('./lists/Category');
const Salad = require('./lists/Salad');
const Order = require('./lists/Order');
const saladCartItem = require('./lists/saladCartItem');
const foodCartItem = require('./lists/foodCartItem');
const fixedOrderItem = require('./lists/fixedOrderItem');
const customOrderItem = require('./lists/customOrderItem');
const PROJECT_NAME = 'ghost-grits';
const adapterConfig = { mongoUri: process.env.DATABASE_URL };

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
  defaultAccess: {
    list: true,
    field: true,
    custom: true,
  },
});

keystone.createList('FoodItem', FoodItem);
keystone.createList('Category', Category);
keystone.createList('Salad', Salad);
keystone.createList('Order', Order);
keystone.createList('saladCartItem', saladCartItem);
keystone.createList('foodCartItem', foodCartItem);
keystone.createList('fixedOrderItem', fixedOrderItem);
keystone.createList('customOrderItem', customOrderItem);

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({ isAccessAllowed: true }),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      isAccessAllowed: true,
    }),
  ],
};
