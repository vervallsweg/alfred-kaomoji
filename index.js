'use strict';

const alfy = require('alfy');

(async () => {
  const data = await alfy.fetch('customer.getdango.com/dango/api/query/kaomoji', {
    maxAge: 604800000,
    query: {
      q: alfy.input
    }
  });

  const items = data.items.map(x => {
    return {
      title: x.text,
      arg: x.text,
      icon: {
        path: ' ' // Hide icon
      }
    };
  });

  alfy.output(items);
})();
