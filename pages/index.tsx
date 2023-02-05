export default function Home() {
  return (
    <>
      <section id="section-head" className="flex flex-col lg:flex-row-reverse ">
        <div className="basis-1/2 lg:basis-full text-center align-middle lg:text-right">
          <h1 className="text-6xl font-merriweather my-4 dark:text-pearl-white">
            Hello, I am
            <span className="text-7xl text-gold-yellow">
              <br />
              Charn
            </span>
          </h1>
          <h2 className="text-2xl font-raleway dark:text-pearl-white">
            A Computer Engineering Student
          </h2>
        </div>
        <div className="basis-1/2 lg:basis-full">
          <div className="max-lg:mx-auto my-auto w-60 h-60 outline rounded-full overflow-hidden">
            <img
              className="object-cover w-full"
              src="/images/placeholder_me.jpg"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
