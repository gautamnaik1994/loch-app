import Carousel from "./TestimonialCarousel";
function TestimonialsSection() {
  return (
    <section className="testimonial-section">
      <div className="inner">
      <h1 className="section-title">Testimonials</h1>
      <hr />
      </div>

      <img src="logo.svg" className="logo"/>
      <Carousel />
    </section>
  );
}

export default TestimonialsSection;
