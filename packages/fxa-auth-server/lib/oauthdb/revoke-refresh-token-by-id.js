/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

const Joi = require('joi');

module.exports = (config) => {
  return {
    path: '/v1/destroy',
    method: 'POST',
    validate: {
      payload: {
        refresh_token_id: Joi.string().required(),
      },
      response: {}
    }
  };
};
