import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel className="overflow-hidden">
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" />
      </Carousel>
    </div>
  );
};

export default Home;
