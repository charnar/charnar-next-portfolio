import Image from "next/image";
import { works } from "@/data/works";

interface WorkItemProp {
  title: string;
  imageLink: string;
  link?: string;
  description?: string;
}

const WorkItem = (prop: WorkItemProp) => {
  return (
    <div className="text-center flex flex-col ">
      <div className="relative rounded-xl overflow-hidden aspect-video">
        <Image
          src={prop.imageLink}
          alt="Work Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h1 className="font-semibold mt-1 text-lg">{prop.title}</h1>
      <h2 className="text-md">{prop.description}</h2>
    </div>
  );
};

export default function WorkShowcase(props: { works: WorkItemProp[] }) {
  {
    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4 max-sm:grid-cols-1">
        {props.works.map((item) => {
          return (
            <WorkItem
              title={item.title}
              imageLink={item.imageLink}
              description={item.description}
            ></WorkItem>
          );
        })}
      </div>
    );
  }
}
