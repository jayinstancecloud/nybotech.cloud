document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-menu");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("nav-open");
    });
  }

  const scrollButtons = document.querySelectorAll("[data-scroll-target]");
  scrollButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-scroll-target");
      if (!target) return;
      const el = document.querySelector(target);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (navLinks && navLinks.classList.contains("nav-open")) {
        navLinks.classList.remove("nav-open");
        if (navToggle) {
          navToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  });

  const practiceTabs = document.querySelectorAll("[data-practice]");
  const practicePanels = document.querySelectorAll("[data-practice-panel]");

  practiceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-practice");
      if (!target) return;

      practiceTabs.forEach((t) => t.classList.remove("pill-tab-active"));
      tab.classList.add("pill-tab-active");

      practicePanels.forEach((panel) => {
        if (panel.getAttribute("data-practice-panel") === target) {
          panel.classList.add("practice-panel-active");
        } else {
          panel.classList.remove("practice-panel-active");
        }
      });
    });
  });

  const demoForm = document.getElementById("demo-form");
  const successEl = document.getElementById("demo-success");
  if (demoForm && successEl) {
    demoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      successEl.hidden = false;
      const form = event.target;
      if (form instanceof HTMLFormElement) {
        form.reset();
      }
    });
  }
});

