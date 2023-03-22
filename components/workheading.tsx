import { WorkHeadingProp } from "@/interfaces/workpageprops";
import Link from "next/link";

const WorkHeading: React.FC<WorkHeadingProp> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-lg font-medium">
        <Link
          className="hover:underline underline-offset-4 text-blue-500 dark:text-pink-500"
          href="/works"
        >
          Works
        </Link>{" "}
        <span className="mx-1">&gt; </span>
        <span className="text-gold-yellow text-2xl font-semibold">{title}</span>
      </h1>

      <p className="mt-4">{description}</p>
    </div>
  );
};

export default WorkHeading;
