'use strict';

/**
 * vcard service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::vcard.vcard');
