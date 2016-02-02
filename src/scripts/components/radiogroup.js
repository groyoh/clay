'use strict';

module.exports = {
  name: 'radiogroup',
  template: require('../../templates/components/radiogroup.tpl'),
  manipulator: require('../lib/manipulators').radiogroup,
  defaults: {
    label: '',
    options: []
  }
};
