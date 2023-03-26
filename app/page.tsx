import profilePic from "../public/images/placeholder_me.jpg";
import Image from "next/image";
import PageWrapper from "@/components/pagewrapper";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const metadata = {
  title: "charnar | Home",
};

export default function Home() {
  return (
    <PageWrapper>
      <section
        id="section-head"
        className="flex flex-col sm:flex-row-reverse mb-16"
      >
        <div className="basis-1/2 sm:basis-full text-center align-middle sm:text-right">
          <h1 className="text-5xl font-merriweather my-4 dark:text-pearl-white">
            Hello, I am
            <span className="text-6xl text-gold-yellow">
              <br />
              Charn
            </span>
          </h1>
          <h2 className="text-2xl font-raleway dark:text-pearl-white">
            A Computer Engineering Student
          </h2>
        </div>
        <div className="basis-1/2 md:basis-full max-sm:mt-10">
          <div className="max-sm:mx-auto my-auto w-56 h-56 rounded-full overflow-hidden border-light-brown border-4">
            <Image src={profilePic} alt="Picture of me!" />
          </div>
        </div>
      </section>

      <section id="section-about" className="mb-10">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          About
        </h1>

        <p className="text-md">
          Hello, I am an undergraduate student in the field of Computer
          Engineering. I'm fairly new to Software Engineering and I find it very
          enjoyable! It feels really good to see how your work can positively
          affect other people. I usually prefer mini design work and front-end
          development but I'm starting to like back-end development as well. I
          have a solid foundation in programming and experience with popular
          frameworks like Vue and React. I've recently been working with
          full-stack frameworks like Next.js and ASP.NET Core.
        </p>

        <p className="text-md my-4">
          I love a good cup of coffee and music is life. I would love to travel
          more in the future and start a mini blog to post random things for
          fun.
        </p>

        <h3 className="font-semibold">
          <span className="dark:text-pink-500 text-teal-600 mr-1">
            &hearts;&hearts;
          </span>
          Thanks for stopping by!
          <span className="dark:text-pink-500 text-teal-600 ml-1">
            &hearts;&hearts;
          </span>
        </h3>
      </section>

      <section id="section-timeline" className="mb-10">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Timeline
        </h1>

        <div className="pl-[3.2rem] -indent-[3.2em]">
          <span className="font-bold mr-4">Now</span>
          Studying for Bachelor's at SIIT, Thammasat University, interning as a
          Software Engineer at Agoda Services Co. Ltd.
        </div>

        <div className="pl-[3.2rem] -indent-[3.2rem] mt-1">
          <span className="font-bold mr-4">2019</span>
          Graduated from Harrow International School Bangkok
        </div>

        <div className="pl-[3.2rem] -indent-[3.2rem] mt-1">
          <span className="font-bold mr-4">2000</span>
          Born in Bangkok Thailand
        </div>
      </section>

      <section id="section-socials">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Me
        </h1>

        <div className="px-4">
          <ul>
            <li className="mb-1">
              <a
                href="https://github.com/charnar"
                target="_blank"
                className="flex align-middle font-semibold items-center text-teal-600 dark:text-pink-500 hover:underline underline-offset-4"
              >
                <BsGithub className="mr-2" />
                charnar
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://www.linkedin.com/in/charnar"
                target="_blank"
                className="flex align-middle font-semibold items-center text-teal-600 dark:text-pink-500
                hover:underline underline-offset-4"
              >
                <BsLinkedin className="mr-2" />
                Charn Arunkit
              </a>
            </li>
            <li className="mb-1">
              <a
                href="mailto: charn.arunkit@yahoo.com"
                className="flex align-middle font-semibold items-center text-teal-600 dark:text-pink-500
                hover:underline underline-offset-4"
              >
                <GrMail className="mr-2" />
                charn.arunkit@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
}
