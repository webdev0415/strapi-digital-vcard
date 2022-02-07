'use strict';

/**
 *  vcard controller
 */

const {createCoreController} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::vcard.vcard', ({strapi}) => ({
  async findOne(ctx) {
    console.log(ctx.params);
    const {id} = ctx.params;
    return await strapi.db.query('api::vcard.vcard').findOne({
      where: {slug: id},
      populate: {
        company: {
          populate: {Logo: true},
        },
        portrait: true
      },
    });
  },
}));
