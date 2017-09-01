'use strict';

const alfy = require('alfy');

alfy.fetch('customer.getdango.com/dango/api/query/kaomoji', {
  query: {
    q: alfy.input
  }
}).then(data => {
  let all = '';

  const items = data.items
    .map(x => {
      const kaomoji = x.text;
      all += kaomoji;

      return {
        title: kaomoji,
        arg: kaomoji,
        icon: {
          path: ' ' // Hide icon
        }
      };
    });

  alfy.output(items);
});
