import profilePic from "../public/images/placeholder_me.jpg";
import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";

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
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-2">
          About
        </h1>

        <p className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <section id="section-timeline">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-2">
          Timeline
        </h1>

        <div className="pl-[3.2rem] -indent-[3.2em]">
          <span className="font-bold mr-4">Now</span>
          Studying for Bachelor's at SIIT, Thammasat University, interning as a
          Software Engineer at Agoda Services Co. Ltd.
        </div>

        <div className="pl-[3.2rem] -indent-[3.2rem] mt-1">
          <span className="font-bold mr-4">2022 - 2023</span>
          Research Assistant for the Thammasat AI-Ready City foundation
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
    </PageWrapper>
  );
}
