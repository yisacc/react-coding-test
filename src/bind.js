// Implement function prototype bind

function bind(fn, context) {
  return function () {
    fn.call(context);
  };
}
