'use strict';

const alfy = require('alfy');

alfy.fetch('customer.getdango.com/dango/api/query/kaomoji', {
  maxAge: 604800000,
  query: {
    q: alfy.input
  }
}).then(data => {
  const items = data.items
    .map(x => {
      return {
        title: x.text,
        arg: x.text,
        icon: {
          path: ' ' // Hide icon
        }
      };
    });

  alfy.output(items);
});
