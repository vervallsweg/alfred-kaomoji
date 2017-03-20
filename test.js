import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
  const alfy = alfyTest();

  const result = await alfy('flip table');

  t.deepEqual(result[0], {
    title: result[0].title,
    arg: result[0].arg,
    icon: {
      path: ' '
    }
  });
});
