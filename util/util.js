'use strict';

const _ = require('lodash');

//functions
const isEmpty = (value) => typeof value === 'undefined' || value === null || value === '' || value.length == 0 || _.isEmpty(value);
const isNotEmpty = (value) => !isEmpty(value);

module.exports = {
    isEmpty,
    isNotEmpty
}
