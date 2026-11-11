
window.onload = function () {
 const layers = [
  "arriba-izquierda",
  "arriba-centro",
  "lateral-derecha",
  "centro-izquierda1",
  "centro-izquierda2",
  "centro-centro",
  "abajo-izquierda1",
  "abajo-izquierda2",
  "abajo-centro",
  "abajo-derecha1",
  "abajo-derecha2"
];
  window.mapper = new Maptastic({
    autoLoad: false,
    autoSave: true,
    layers: layers
  });
  let editing = false;
  window.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "Space") {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (event.repeat) return;
      editing = !editing;
      window.mapper.setConfigEnabled(editing);
    }
  }, true);
};
