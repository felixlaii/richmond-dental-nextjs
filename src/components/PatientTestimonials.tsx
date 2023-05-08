import Slider from "react-slick";

interface Testimonial {
  authorName: string;
  rating: string;
  review: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const PatientTestimonials: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return <div></div>;
};
