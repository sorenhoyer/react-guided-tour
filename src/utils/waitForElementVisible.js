export default (element, callback, interval = 1000) => {
  var checkExist = setInterval(function() {
    var el = typeof element == "function" ? element() : element;
    if (el.offsetParent !== null) {
      clearInterval(checkExist);
      if (typeof callback == "function") {
          callback();
      }
    }
  }, interval);
};