const items = require("../Items");

// Options for get all items

function itemRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", (req, reply) => {
    reply.send(items);
  });

  // get single items
  fastify.get("/items/:id", (req, reply) => {
    const { id } = req.params;

    const item = items.find((item) => item.id === id);

    reply.send(item);
  });

  done();
}

module.exports = itemRoutes;
