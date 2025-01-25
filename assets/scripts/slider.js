document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".banner__slider__image");
  const buttons = document.querySelectorAll(
    ".banner__about__bento__item button[data-index]"
  );

  let currentIndex = 0;
  let autoSlideInterval = startAutoSlide();

  updateSlider(currentIndex);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = parseInt(button.getAttribute("data-index"), 10);
      clearInterval(autoSlideInterval);
      currentIndex = index;
      updateSlider(currentIndex);
      autoSlideInterval = startAutoSlide();
    });
  });

  function updateSlider(index) {
    images.forEach((image, i) => {
      image.classList.toggle("banner__slider__image--selected", i === index);
    });
    buttons.forEach((button, i) => {
      button.classList.toggle("active", i === index);
    });
  }

  function startAutoSlide() {
    return setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlider(currentIndex);
    }, 8000);
  }
});
