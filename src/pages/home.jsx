import React, { useState } from "react";
import heroImage from "../assets/hero-image.png";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";
import schedule from "../assets/stats.webp";
import monitorcard from "../assets/monitor-card.webp";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsChevronLeft, BsChevronRight, BsStack } from "react-icons/bs";
import { HiArrowRight, HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fadeIn, textVariant } from "../ulties/motion";

const Home = () => {
  const [productCount, setProductCount] = useState(1);

  // calclute product count
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  const features = [
    {
      icon: "🟣",
      title: "Built for impact",
      description:
        "We identify and nurture a truly diverse team of designers, developers and marketers",
    },
    {
      icon: "🔴",
      title: "In sync with you",
      description:
        "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.",
    },
  ];

  const partnerdetails = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];

  const services = [
    {
      icon: <BsStack className="w-8 h-8 text-indigo-600" />,
      title: "Web Design",
      description: "One for all and all for one, Muskehounds are always ready.",
      link: "#learn-more",
    },
    {
      icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
      title: "Ad-Creatives",
      description: "Alphabet Village and the subline of her own road.",
      link: "#learn-more",
    },
    {
      icon: <FiSettings className="w-8 h-8 text-red-400" />,
      title: "Automation",
      description: "Little Blind Text should turn around and return.",
      link: "#learn-more",
    },
    {
      icon: <BiTime className="w-8 h-8 text-cyan-400" />,
      title: "Infographics",
      description: "Nothing the copy said could convince her.",
      link: "#learn-more",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Robin Ayala Doe",
      image: "https://randomuser.me/api/portraits/men/77.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      id: 2,
      name: "John De marli",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      id: 3,
      name: "Rowhan Smith",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      text: "When she reached the first hills of the Mountains, she had a last view back on the of her hometown Bookmarksgrove, the headline.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text: "The customer service has been exceptional. They went above and beyond to help me solve my problems and were always available when I needed them.",
    },
    {
      id: 5,
      name: "Michael Chen",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "I've been using their services for over a year now and couldn't be happier. The platform is intuitive and the features are exactly what I needed for my business.",
    },
    {
      id: 6,
      name: "Emma Wilson",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "What impressed me most was how quickly they responded to my requests. The team is professional, knowledgeable, and truly cares about their customers' success.",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* hero section */}
      <section
        id="home"
        className="container mx-auto pt-44 flex flex-col md:flex-row justify-between items-center pb-6 px-4 md:px-6 lg:px-8"
      >
        {/* left side */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* star badge */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
          >
            <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group-[]:">
              <span className="text-blue-600 group-hover:scale-110 hover:text-blue-600 transition-transform">
                ⭐
              </span>
              <span className="text-sm font-medium ">
                {" "}
                Jump start your growth
              </span>
            </div>
          </motion.div>

          {/* heaidngs */}
          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            We boost the growth for{" "}
            <span className="text-blue-600 relative inline-block">
              Startup to Fortune 500{" "}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60 "></span>
            </span>
            Companies
            <span className="inline-block ml-2 animate-pulse">⏰</span>{" "}
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="text-gray-600 texl-lg md:text-xl max-w-xl"
          >
            Get the most accurate leads, sales people training and conversions,
            tools and more - all within the same one billing
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            className="flex gap-3 max-w-md"
          >
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
            />

            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
              →
            </button>
          </motion.div>
        </div>

        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
        >
          <div className="relative ">
            <img
              src={heroImage}
              alt=""
              className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300 "
            />
          </div>
        </motion.div>
      </section>

      {/*logo section  */}
      <section className="w-full overflow-hidden container mx-auto py-20  gap-8 flex sm:flex-row flex-col sm:items-center items-start">
        <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base tex-xl font-semibold text-left">
          Proud partner at <br /> Huspot & Segment
        </div>

        <div className="flex animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}

          {/* duplicate logos */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt="company logo"
              className="mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </section>

      {/* Purpose notice section */}
      <section id="" className="w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6 ">
        <div className="max-w-6xl mx-auto ">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {/* heading texr */}
            <div className="">
              <p className="text-sm text-purple-600 font-medium">
                ACHIEVE MORE
              </p>
              <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
                Purpose of a convoy is to keep your team
              </h2>
            </div>

            {/* bullet points */}
            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex  space-x-4">
                  <div className="w-12 h-12 flex items-center justify-start rounded-lg ">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 ">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* parter section */}
      <section id="about" className=" mx-auto max-w-7xl px-4 py-16 ">
        {/* heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            How can we help your business?
          </h2>
          <p className="text-gray-600">
            When you resell besnik, you build trust and increase
          </p>
        </div>

        {/* feature sec */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-5 ">
          {partnerdetails.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col text-center items-center p-6"
            >
              <div
                className="w-24 h-24 rounded-full mb-6 flex items-center justify-center "
                style={{
                  backgroundColor:
                    index === 0
                      ? "#F1EFFD"
                      : index === 1
                      ? "#FEE7E7"
                      : "#FFF3E4",
                }}
              >
                <div className="text-3xl">{feature.icon}</div>
              </div>

              <h3 className="text-2xl font-medium mb-3 ">{feature.title}</h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative  ">
            Become a Partner
            <div className="absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div>
          </button>
        </div>
      </section>

      {/* schedule section */}
      <section id="" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* left side */}
          <div className="md:w-1/2 w-full">
            <img
              src={schedule}
              alt="scheduleimage"
              className="w-full h-auto "
            />
          </div>

          {/* left side */}
          <div className="md:w-1/2 w-full">
            <p className="text-orange-500 font-semibold">SCHEDULE</p>
            <h2 className="text-3xl  md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
              Streamline Your Business <br />
              With Smart Scheduling Solutions
            </h2>
            <p className="text-gray-600 mb-8">
              Take control of your time and boost productivity with our
              intelligent scheduling system. Automate appointments, manage team
              availability, and deliver exceptional customer experiences through
              seamless calendar management.
            </p>
            <a
              href="#"
              className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Explore scheduling features
              <IoIosArrowRoundForward className="size-8 " />
            </a>
          </div>
        </div>
      </section>

      {/* Monitor section */}
      <section id="" className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* left side */}

          <div className="md:w-1/2 w-full">
            <p className="text-green-500 font-semibold">MONITOR</p>
            <h2 className="text-3xl  md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
              Introducing best
              <br />
              mobile carousels <br />
            </h2>
            <p className="text-gray-600 mb-8">
              Before the ship is really back. Round, round, all around the
              world. Round, all around the world. Round, all around the world.
              Round, all around the world.
            </p>
            <a
              href="#"
              className="text-blue-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            >
              Learn more about monitoring
              <IoIosArrowRoundForward className="size-8 " />
            </a>
          </div>

          {/* left side */}
          <div className="md:w-1/2 w-full">
            <img
              src={monitorcard}
              alt="scheduleimage"
              className="w-full h-auto "
            />
          </div>
        </div>
      </section>

      {/* pricing section */}
      <section className="py-20 px-4 ">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pricing
          </h2>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* starter plan */}

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-600 mb-4">Starter</h3>
              <p className="text-3xl font-bold mb-6">${starterPrice}/mo</p>
            </div>

            {/* business plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl text-gray-600 mb-4">Business</h3>
              <p className="text-3xl font-bold mb-6">${businessPrice}/mo</p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-center text-gray-600 mb-4">
              {productCount} products
            </p>

            <div className="relative px-4">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-600">1</span>
                <input
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="1"
                  max="50"
                  value={productCount}
                  onChange={(e) => setProductCount(parseInt(e.target.value))}
                />
                <span className="text-xs sm:text-sm text-gray-600">50</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-4">Ready to get started</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* support section  */}
      <section
        id="services"
        className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          {/* left side */}
          <div className="md:w-1/3 w-full ">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:w-4/5">
              Future of support with new shape
            </h2>
            <p className="text-gray-600 text-lg mb-4 md:w-4/5">
              Discuss your goals, determine success metrics, identify problems
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 ">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">
                  UX design content strategy
                </span>
              </div>

              <div className="flex items-center gap-2 ">
                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
                </div>
                <span className="text-gray-600">Development bring</span>
              </div>
            </div>

            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 cursor-pointer rounded-full hover:bg-indigo-700 transition-colors ">
              Get Staerted
            </button>
          </div>

          {/* right side side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 ">{service.description}</p>
                <a
                  href={service.link}
                  className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
                >
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* testimonil section*/}
      <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl mb-4 ">
            What our happy client say
          </h2>
          <p className="text-gray-600 ">
            Things that make it the best place to start trading
          </p>
        </div>

        {/* testimonial card*/}
        <div className="relative ">
          {/* swipper card */}
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            className="testimonial-swiper md:mb-12"
          >
            {testimonials.map((testimonials, index) => (
              <SwiperSlide key={index} className="h-full md:py-12 py-4">
                <div className="text-center bg-white p-4 rounded-lg shadow-md -full flex flex-col">
                  <div className="w-24 h-24 mx-auto mb-4">
                    <img
                      src={testimonials.image}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, startIndex) => (
                      <span className="text-yellow-400">⭐</span>
                    ))}
                  </div>

                  <div className="text-xl font-semibold mb-3">
                    {testimonials.name}
                  </div>
                  <p className="text-gray-600">{testimonials.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* navigation button */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-next-custom w-12 h-12 rounded-full border-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
              <BsChevronLeft className="size-6" />
            </button>

            <button className="swiper-button-prev-custom w-12 h-12 rounded-full border-gray-700 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
              <BsChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </section>

      {/* news letter section */}
      <section
        id="newsletter"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="bg-blue-600 rounded-2xl overflow-hidden">
          <div className="relative md:px-16 py-16 px-6 md:py-24">
            {/* gradient bg */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block"></div>

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* left side */}
              <div className="text-white max-w-lg text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
                  Subscribe newsletter
                </h2>
                <p className="text-blue-100 text-sm sm:text-base">
                  Best cooks and best delivery gus all at your service.Hot tasty
                  food
                </p>
              </div>

              {/* right side */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="w-full bg-white sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none"
                />
                <button className="w-full sm:w-auto cursor-pointer bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-none sm:rounded-r-lg flex items-center gap-2">
                  <span>Discover</span>
                  <HiArrowRight className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`.clip-path-slant{
            clip-path:polygon(20% 0%,100% 0%,100% 100%,0% 100%)}`}
        </style>
      </section>
    </div>
  );
};

export default Home;
