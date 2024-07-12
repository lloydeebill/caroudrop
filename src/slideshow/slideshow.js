class Slide {
  constructor() {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);

    this.plusSlides = this.plusSlides.bind(this);
    this.currentSlide = this.currentSlide.bind(this);

    // Start the automatic slideshow
    this.startAutoSlide();
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  startAutoSlide() {
    setInterval(() => {
      this.plusSlides(1);
    }, 3000); // Change slide every 3 seconds
  }
}

export { Slide };
