import profilePic from "public/images/placeholder_me.jpg";
import Image from "next/image";
import PageWrapper from "@/components/pagewrapper";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaHeart } from "react-icons/fa6";

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
            A Software Engineer
          </h2>
        </div>
        <div className="basis-1/2 md:basis-full max-sm:mt-10">
          <div className="max-sm:mx-auto my-auto w-56 h-56 rounded-full overflow-hidden border-light-brown border-4">
            <Image src={profilePic} alt="Picture of me!" placeholder="blur" />
          </div>
        </div>
      </section>

      <section id="section-about" className="mb-10">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          About
        </h1>

        <p className="text-md">
          Hello, welcome to my portfolio! I am currently working as a Full Stack
          Developer. I find it very enjoyable, it feels really good to see how
          your work can positively affect other people. I also like to do some
          mini UX/UI design during my freetime
        </p>

        <p className="text-md my-4">
          I love a good cup of coffee and music is life. I would love to travel
          more in the future and start a mini blog to post random things for
          fun.
        </p>

        <h3 className="font-semibold inline-flex items-center">
          <span className="dark:text-pink-500 text-teal-600 mr-1 inline-flex space-x-0.5">
            <FaHeart />
            <FaHeart />
          </span>
          Thanks for stopping by!
          <span className="dark:text-pink-500 text-teal-600 ml-1 inline-flex space-x-0.5">
            <FaHeart />

            <FaHeart />
          </span>
        </h3>
      </section>

      <section id="section-timeline" className="mb-10">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Timeline
        </h1>

        <div className="pl-[3.2rem] -indent-[3.2em]">
          <span className="font-bold mr-4">Now</span>
          Working as a Software Engineer at Agoda Services Co. Ltd.
        </div>

        <div className="pl-[3.2rem] -indent-[3.2em]">
          <span className="font-bold mr-4">2023</span>
          Completed a Bachelor's in Engineering from SIIT, Thammasat University
          and graduated with first honors
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
