"use strict";

/**
 * post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::post.post", ({ strapi }) => ({
  // async find(ctx) {
  //   const entity = await strapi.service("api::post.post").find(ctx);
  //   const results = [...entity.results];
  //   const shouldReplace = process.env.STRAPI_URL === "develop";
  //   const absolutPathed = results.map((item) => {
  //     let changedObject = {
  //       ...item,
  //       content: item.content.replace(
  //         "/uploads",
  //         `${process.env.STRAPI_URL}/uploads`
  //       ),
  //     };
  //     return shouldReplace ? changedObject : item;
  //   });
  //   const sanitizedEntity = await this.sanitizeOutput({ name: "asd" }, ctx);
  //   return this.transformResponse(sanitizedEntity);
  // },
}));
