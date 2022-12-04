"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  async find(ctx) {
    const entity = await strapi.service("api::post.post").find(ctx);
    const results = [...entity.results];
    const absolutPathed = results.map((item) => {
      return {
        ...item,
        content: item.content.replace(
          "/uploads",
          `${strapi.config.get("server.url")}/uploads`
        ),
      };
    });
    entity.results = absolutPathed;
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
