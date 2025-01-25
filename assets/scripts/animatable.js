document.addEventListener("DOMContentLoaded", function () {
  const observer = observeElementToAnimate();

  const classes = [".animatable", ".animatable_top", ".animatable_bottom"];

  classes.map((classe) => {
    document.querySelectorAll(classe).forEach((element) => {
      observer.observe(element);
    });
  });
});

function observeElementToAnimate() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  return observer;
}
