export interface CarouselSlideType {
  title: string;
  subtitle: string;
  description: string;
  background: string;
  backgroundColor?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface CarouselSlideProps extends CarouselSlideType {
  isActive: boolean;
}

export interface MainCarouselProps {
  slides: CarouselSlideType[];
}