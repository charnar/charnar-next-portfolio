import Image from "next/image";
import hourGlass from "public/images/sand-watch.png";

const Development = () => {
  return (
    <div className="flex flex-col text-center">
      <div className="w-56 h-56 mx-auto">
        <Image src={hourGlass} alt="sandwatch" />
      </div>
      <h1 className="font-semibold text-xl">
        I am still working on it, coming soon!
      </h1>
    </div>
  );
};

export default Development;
