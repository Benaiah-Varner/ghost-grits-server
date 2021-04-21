const { foodCartItem } = require('./foodCartItem');
const { KeystoneContext } = require('@keystone-next/types');
const { gql } = require('apollo-server-express');
const { Keystone } = require('@keystonejs/keystone');

async function checkout(token, KeystoneContext) {
  // const { adapter } = foodCartItem;
  const { data, errors } = await context.executeGraphQl({
    query: gql`
            allFoodCartItems {
    id
    quantity
    food {
      name
      description
      price
      id
    }
  }
        `,
    variables: {},
  });
  console.log('keystone ', data);
  //   console.log('token ', token);
}

module.exports = checkout;
