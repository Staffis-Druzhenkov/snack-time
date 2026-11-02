(function () {
  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.burger');

  if (header && burger) {
    burger.addEventListener('click', function () {
      var opened = header.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });

    document.querySelectorAll('.mobile-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        header.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tabId = btn.getAttribute('data-tab');

      document.querySelectorAll('.tab-btn').forEach(function (other) {
        var isActive = other === btn;
        other.classList.toggle('active', isActive);
        other.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      document.querySelectorAll('.tab-panel').forEach(function (panel) {
        panel.classList.toggle('active', panel.getAttribute('id') === tabId);
      });
    });
  });

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
