export const inhert = (function () {
  var F = function () {};
  return function (Target: Function, Origin: Function) {
    F.prototype = Origin.prototype;
    Target.prototype = new (F as any)();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
  };
})();
