const { getItems, getItem, addItem } = require("../controllers/items");

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item,
      },
    },
  },
  handler: getItems,
};

const getItemOpts = {
  schema: {
    response: {
      200: Item,
    },
  },
  handler: getItem,
};

const postItemOpts = {
  schema: {
    response: {
      201: Item,
    },
  },
  handler: addItem,
};

function itemRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", getItemsOpts);

  // get single items
  fastify.get("/items/:id", getItemOpts);

  // add item
  fastify.post("/items", postItemOpts);

  done();
}

module.exports = itemRoutes;
