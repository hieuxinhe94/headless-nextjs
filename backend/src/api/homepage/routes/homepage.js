'use strict';

/**
 * homepage router.
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::homepage.homepage');

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::homepage.homepage', {
  config: {
    find: {
      middlewares: [
        (ctx, next) => {
          if (!ctx.query.populate) {
            ctx.query.populate = '*'
            // or set to whatever qs populate structure you want
          }

          return next()
        }
      ]
    }
  }
});
