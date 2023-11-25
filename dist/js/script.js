document.addEventListener("DOMContentLoaded", function () {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      content.classList.toggle("hidden");
    });
  });
});
