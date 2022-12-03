export const inhert = (() => {
  const F = new Function();
  return (
    Target: (...args: any[]) => void,
    Origin: (...args: any[]) => void,
  ) => {
    F.prototype = Origin.prototype;
    Target.prototype = new (F as any)();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin;
  };
})();
