import React from "react";
import CreateForm from "../dashboard/_components/CreateForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BarChart2,
  Bookmark,
  FilePlus,
  FileText,
  Headphones,
  Search,
  Settings,
  Share2,
  Shield,
  Smile,
} from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    avatar: "/users/user-1.png",
    rating: 5,
    name: "John Smith",
    comment:
      "I am amazed by the ease and accuracy of the AI-powered paper search and summary features on this platform. It’s incredibly helpful for quickly understanding complex research topics. This tool has revolutionized our approach to accessing and digesting academic content!"
  },
  {
    avatar: "/users/user-2.png",
    rating: 4,
    name: "Emily Johnson",
    comment:
      "Our team has benefited greatly from the AI-driven paper analysis and summary capabilities offered by this platform. It has significantly enhanced our ability to comprehend and utilise academic literature effectively. Highly recommended for researchers and students alike!"
  },
  {
    avatar: "/users/user-3.png",
    rating: 5,
    name: "Sophia Brown",
    comment:
      "Using this platform has transformed our research process. The AI-powered paper search and summary tools are incredibly intuitive and efficient, saving us valuable time. The user interface is seamless, making it accessible for everyone in our academic team."
  },
  {
    avatar: "/users/user-4.jpg",
    rating: 5,
    name: "David Wilson",
    comment:
      "I am impressed by how this platform simplifies the process of accessing and summarising research papers. It has significantly improved our research productivity and knowledge sharing. The support team is also excellent, providing prompt assistance whenever needed."
  },
  {
    avatar: "/users/user-5.jpg",
    rating: 4,
    name: "Michael Miller",
    comment:
      "The AI-driven features of this platform are outstanding. They have streamlined our ability to find and digest academic papers efficiently. This tool is invaluable for anyone looking to enhance their research capabilities and stay updated with the latest studies."
  },
  {
    avatar: "/users/user-6.png",
    rating: 5,
    name: "Emma Davis",
    comment:
      "We've been using this platform extensively, and it has exceeded our expectations. The AI-powered paper search and summary functionalities have transformed how we engage with scholarly content. Highly recommended for academics and researchers!"
  }
];




const Hero = () => {
  return (
    <div id="top">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[calc(100vh-56px)] lg:items-center">
          <div className="flex justify-between align-middle">
            <div className="max-w-3xl text-center my-auto">
              <h1 className="bg-gradient-to-r from-orange-400 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-6xl">
                Making knowledge accessible for all.
                {/* <span className="sm:block"> Increase Conversion. </span> */}
              </h1>

              <p className="mx-auto mt-8 max-w-xl sm:text-xl/relaxed">
                15-min simplified summaries of cutting-edge research papers.
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <CreateForm />

                {/* <Link
                  href={"https://github.com/LucasSuL/ai-form-builder"}
                  target="_blank"
                >
                  <Button className="bg-gray-900" variant="outline">
                    Learn More
                  </Button>
                </Link> */}
              </div>
            </div>
            <Image
              alt=""
              src="/business-3d-friendly-robot-assistant-waving.png"
              width={300}
              height={400}
              className="hidden md:block"
            />
          </div>
        </div>
      </section>
      {/* <div class="bg-gradient-to-b from-green-50 to-green-100">
        <section class="py-10 sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  Collaborate remotely, with
                  <div class="relative inline-flex">
                    <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      Postcrafts.
                    </h1>
                  </div>
                </h1>

                <p class="mt-8 text-base text-black sm:text-xl">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.
                </p>

                <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600"
                    role="button"
                  >
                    {" "}
                    Start exploring{" "}
                  </a>

                  <a
                    href="#"
                    title=""
                    class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                  >
                    <svg
                      class="w-10 h-10 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        fill="#F97316"
                        stroke="#F97316"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Watch video
                  </a>
                </div>
              </div>

              <div>
                <img
                  class="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <section id="2-steps">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-center mb-12">
            How it works
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-2xl border-2 border-gray-300 shadow-xl px-5 py-10 hover:shadow-none">
              <Image
                alt=""
                src="/sammy-line-page-not-found.png"
                className="h-60 w-full object-cover"
                width={500}
                height={500}
              />

              <div className="p-4 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What is it
                </h2>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Instantly summarize academic papers using advanced AI
                  technology for quick and accurate insights.
                </p>
                {/* <CreateForm isFromHero={true} /> */}
              </div>
            </article>
            <article className="rounded-2xl border-2 border-gray-300 shadow-xl px-5 py-10 hover:shadow-none">
              <Image
                alt=""
                src="/sammy-line-service-support-3.png"
                className="h-60 w-full object-cover"
                width={500}
                height={500}
              />

              <div className="p-4 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How to Use
                </h2>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Upload your paper, get a detailed summary, and explore
                  additional features.
                </p>

                {/* <Link
                  href="https://lucassu-ai-form-builder.vercel.app/edit-form/28"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  target="_blank"
                >
                  Try it
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-1 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </Link> */}
              </div>
            </article>{" "}
            <article className="rounded-2xl border-2 border-gray-300 shadow-xl px-5 py-10 hover:shadow-none">
              <Image
                alt=""
                src="/sammy-line-page-under-construction.png"
                className="h-60 w-full object-cover"
                width={500}
                height={500}
              />

              <div className="p-4 sm:p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Features
                </h2>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Enjoy data visualization, favourites, audiobooks, and
                  personalized article recommendations.
                </p>

                {/* <Link
                  href="https://lucassu-ai-form-builder.vercel.app/dashboard"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  target="_blank"
                >
                  Dashboard
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-1 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </Link> */}
              </div>
            </article>
          </div>
        </div>
      </section>
      ```jsx
      <section id="3-academic-summarizer">
        <section className="bg-gray-900 text-white pb-20">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto max-w-lg text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                AI-Enhanced Academic Paper Database
              </h2>

              <p className="mt-4 text-gray-300">
                Access a comprehensive academic paper database with AI-powered
                summarization and detailed table generation.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <FileText className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  AI-Powered Summarization
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Efficiently summarize academic papers using cutting-edge AI
                  technology.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <Search className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  Powerful Search Capabilities
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Utilize advanced search features to pinpoint specific data and
                  generate detailed tables.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <BarChart2 className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  Data Visualization Tools
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Visualize complex data with interactive charts and graphs for
                  deeper insights.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <Bookmark className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  Personalized Bookmarking
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Save and organize your favourite papers for easy access and
                  reference.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <Headphones className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  Audio Summaries
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Listen to summaries of academic papers on-the-go with our
                  audio feature.
                </p>
              </a>

              <a
                className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                href="#"
              >
                <Settings className="icon-class text-purple-400 w-10 h-10" />

                <h2 className="mt-4 text-xl font-bold text-white">
                  Lightning-Fast Insights
                </h2>
                <p className="mt-1 text-sm text-gray-300">
                  Gain quick insights and export data effortlessly for further
                  analysis.
                </p>
              </a>
            </div>
          </div>
        </section>
      </section>

     <section id="4-reviews">
  <section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Read trusted reviews from our customers
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {reviews.map((review, index) => (
          <blockquote key={index} className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <img
                alt=""
                src={review.avatar}
                className="size-14 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">
                  {review.name}
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              {review.comment}
            </p>
          </blockquote>
        ))}
      </div>
    </div>
  </section>
</section>

    </div>
  );
};

export default Hero;
