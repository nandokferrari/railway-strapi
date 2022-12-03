// import { nanoid } from "nanoid";

const { nanoid } = require("nanoid");
const { default: slugify } = require("slugify");

// const { default: slugify } = require("slugify");

// const { nanoid } = require("nanoid");

module.exports = {
  beforeCreate(event) {
    const { data, where, select, populate } = event.params;

    data.uuid = nanoid();
    data.slug = slugify(data.title.toLowerCase());
  },
  afterCreate(event) {
    const { result, params } = event;
  },
};
