document.addEventListener('DOMContentLoaded', function () {
  var bottleFull = document.getElementById('nscBottleFull');
  var pct = document.getElementById('nscScrollPct');
  if (!bottleFull || !pct) return;

  function update() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(100, Math.max(0, (window.scrollY / h) * 100)) : 0;
    // starts full, empties (top-down) as the page scrolls
    bottleFull.style.clipPath = 'inset(' + p + '% 0 0 0)';
    pct.textContent = Math.round(p) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
