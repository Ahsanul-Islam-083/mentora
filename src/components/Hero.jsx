"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Star, Play } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-slate-50 to-white pt-12 pb-24 md:pt-24 md:pb-32">

      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left Content */}
              <div className="space-y-8 text-center lg:text-left">

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm">
                  <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Master New Skills with{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Expert-Led
                  </span>{" "}
                  Courses
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Unlock your potential with over 1,000+ high-quality courses
                  taught by industry professionals. Start your learning journey
                  today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">

                  <Button
                    href="/courses"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/30 group border border-blue-500"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-800 hover:bg-slate-100 hover:border-blue-400 transition-all duration-300 group"
                  >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </div>

                {/* Logos */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-6 grayscale opacity-70">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
                    alt="Google"
                    width={60}
                    height={24}
                    className="h-6 w-auto"
                  />

                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                    alt="LinkedIn"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />

                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                    alt="YouTube"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                  />
                </div>
              </div>

              {/* Right Image */}
              <div className="relative group">

                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                <div className="relative bg-white/90 backdrop-blur-xl p-2 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.12)] overflow-hidden aspect-video lg:aspect-square">

                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-4xl object-cover transform transition duration-700 group-hover:scale-105"
                  />

                  {/* Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/85 backdrop-blur-xl p-4 md:p-6 rounded-2xl border border-slate-200/60 shadow-2xl">

                    <div className="flex items-center gap-4">

                      <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                          <Image
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            width={40}
                            height={40}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-md"
                            alt="avatar"
                          />
                        ))}
                      </div>

                      <div>
                        <p className="font-bold text-sm text-slate-900">
                          Join the community
                        </p>

                        <p className="text-xs text-slate-500">
                          500+ new enrollments today
                        </p>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div className="space-y-8 text-center lg:text-left">

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm">
                  <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Learn Anytime From{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Anywhere
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Access premium learning materials on desktop, tablet, or
                  mobile devices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">

                  <Button
                    href="/courses"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/30 group border border-blue-500"
                    >
                    Explore Courses
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-800 hover:bg-slate-100 hover:border-blue-400 transition-all duration-300 group"
                    >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="relative group">

                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                <div className="relative bg-white/90 backdrop-blur-xl p-2 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.12)] overflow-hidden aspect-video lg:aspect-square">

                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-4xl] object-cover transform transition duration-700 group-hover:scale-105"
                    />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              <div className="space-y-8 text-center lg:text-left">

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200 text-blue-700 font-semibold text-sm shadow-sm">
                  <Star className="w-4 h-4 fill-blue-600 text-blue-600" />
                  <span>Trusted by 10,000+ Students Worldwide</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                  Build Your Future Career{" "}
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-blue-800">
                    Today
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Gain real-world skills and certificates that help you stand out professionally.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">

                  <Button
                    href="/courses"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-500/30 group border border-blue-500"
                  >
                    Explore Courses
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>

                  <Button
                    variant="bordered"
                    size="lg"
                    className="h-14 px-8 text-lg font-bold rounded-full border-2 border-slate-300 bg-white/80 backdrop-blur text-slate-800 hover:bg-slate-100 hover:border-blue-400 transition-all duration-300 group"
                  >
                    <Play className="mr-2 fill-slate-900 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              <div className="relative group">

                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

                <div className="relative bg-white/90 backdrop-blur-xl p-2 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_80px_rgba(0,0,0,0.12)] overflow-hidden aspect-video lg:aspect-square">

                  <Image
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop"
                    alt="Learning"
                    fill
                    className="rounded-4xl] object-cover transform transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;