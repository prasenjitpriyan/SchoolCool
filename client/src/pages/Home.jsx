import { Carousel, Button } from "flowbite-react";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { IoFolderOpenOutline, IoBusOutline } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { GiPortal } from "react-icons/gi";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  return (
    <div className="dark:bg-royalBlue">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mb-5">
        <Carousel className="overflow-hidden">
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" />
        </Carousel>
      </div>
      <div className="container mx-auto mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
            1
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
            2
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
            3
          </div>
          <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
            4
          </div>
        </div>
      </div>
      <div className="mx-auto mb-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <Link to="photo-gallery" className="pointer">
            <div className="flex justify-center bg-blue-500 text-white p-20 h-73">
              <div className="flex flex-col gap-5 items-center">
                <MdOutlineVideoCameraBack className="text-6xl" />
                <h2 className="text-sm">Gallery</h2>
              </div>
            </div>
          </Link>
          <Link to="admission-notice" className="pointer">
            <div className="flex justify-center bg-teal-400 text-white p-20">
              <div className="flex flex-col gap-5 items-center">
                <IoFolderOpenOutline className="text-6xl" />
                <h2 className="text-sm">Admission</h2>
              </div>
            </div>
          </Link>
          <Link to="fee-structure" className="pointer">
            <div className="flex justify-center bg-purple-500 text-white p-20">
              <div className="flex flex-col gap-5 items-center">
                <CiMoneyCheck1 className="text-6xl" />
                <h2 className="text-sm">Fee</h2>
              </div>
            </div>
          </Link>
          <Link to="fee-structure" className="pointer">
            <div className="flex justify-center bg-orange-500 text-white p-20">
              <div className="flex flex-col gap-5 items-center">
                <SlCalender className="text-6xl" />
                <h2 className="text-sm">Calender</h2>
              </div>
            </div>
          </Link>
          <Link to="fee-structure" className="pointer">
            <div className="flex justify-center bg-green-700 text-white p-20">
              <div className="flex flex-col gap-5 items-center">
                <IoBusOutline className="text-6xl" />
                <h2 className="text-sm">Transportation</h2>
              </div>
            </div>
          </Link>
          <Link to="fee-structure" className="pointer">
            <div className="flex justify-center bg-yellow-500 text-white p-20">
              <div className="flex flex-col gap-5 items-center">
                <GiPortal className="text-6xl" />
                <h2 className="text-sm">Portal</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="navbar">
          <div className="navbar-start"></div>
          <div className="navbar-center">
            <Link className="btn btn-ghost text-xl">BEYOND ACADEMICS</Link>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
      <div>
        <div className="container mx-auto mb-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
            <div className="flex justify-center text-6xl border-2 border-gray-300 rounded-xl p-6">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                    <a
                      className="no-underline hover:underline text-black"
                      href="#"
                    >
                      Article Title
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">11/1/19</p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <img
                      alt="Placeholder"
                      className="block rounded-full"
                      src="https://picsum.photos/32/32/?random"
                    />
                    <p className="ml-2 text-sm">Author Name</p>
                  </a>
                  <a
                    className="no-underline text-grey-darker hover:text-red-dark"
                    href="#"
                  >
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                  </a>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="grid grid-rows-2">
          <Button.Group className="mx-auto mt-5 gap-2">
            <Button gradientDuoTone="greenToBlue">PHOTOS</Button>
            <Button gradientDuoTone="greenToBlue">VIDEOS</Button>
            <Button gradientDuoTone="greenToBlue">POINTER</Button>
          </Button.Group>
        </div>
        <div>
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
