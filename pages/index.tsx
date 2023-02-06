export default function Home() {
  return (
    <section id="section-head" className="flex flex-col md:flex-row-reverse ">
      <div className="basis-1/2 md:basis-full text-center align-middle md:text-right">
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
      <div className="basis-1/2 md:basis-full max-md:mt-10">
        <div className="max-md:mx-auto my-auto w-56 h-56 outline rounded-full overflow-hidden">
          <img
            className="object-cover w-full"
            src="/images/placeholder_me.jpg"
          ></img>
        </div>
      </div>
    </section>
  );
}
