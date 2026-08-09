const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const dialog = document.querySelector("[data-dialog]");
const openDialogButton = document.querySelector("[data-dialog-open]");
const closeDialogButtons = document.querySelectorAll("[data-dialog-close]");

if (dialog && openDialogButton) {
  openDialogButton.addEventListener("click", () => dialog.showModal());

  closeDialogButtons.forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });

  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!inside) dialog.close();
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
