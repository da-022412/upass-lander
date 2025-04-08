document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".accordions");
  var accordionBtns = container.querySelectorAll(".accordion-trigger");

  function openAccordion(el) {
    var target = el.nextElementSibling;

    if (!el.classList.contains("active")) {
      el.classList.add("active");
      target.classList.add("open");
      el.setAttribute("aria-expanded", "true");
    }
  }

  function closeAccordion(el) {
    var target = el.nextElementSibling;

    if (el.classList.contains("active")) {
      el.classList.remove("active");
      target.classList.remove("open");
      el.setAttribute("aria-expanded", "false");
    }
  }

  accordionBtns.forEach(function (el) {
    el.addEventListener("click", function () {
      if (el.classList.contains("active")) {
        closeAccordion(el);
      } else {
        openAccordion(el);
      }
    });
  });
});
