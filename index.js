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
      const emoji = x.text;
      all += emoji;

      return {
        title: emoji,
        arg: emoji,
        icon: {
          path: ' ' // Hide icon
        }
      };
    });

  items.push({
    title: all,
    arg: all,
    icon: {
      path: ' '
    }
  });

  alfy.output(items);
});
