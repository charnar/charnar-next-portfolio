import Image from "next/image";
import Link from "next/link";
import { WorkItemProp } from "@/interfaces/workpageprops";

const WorkItem: React.FC<WorkItemProp> = ({
  title,
  imageLink,
  link,
  description,
}: WorkItemProp) => {
  return (
    <div className="text-center flex flex-col ">
      <Link href={`/works/${link}`}>
        <div className="relative rounded-xl overflow-hidden aspect-video">
          <Image
            src={imageLink}
            alt="Work Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Link>

      <h1 className="font-semibold mt-1 text-lg">{title}</h1>
      <h2 className="text-md">{description}</h2>
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
              key={item.title}
              title={item.title}
              imageLink={item.imageLink}
              description={item.description}
              link={item.link}
            ></WorkItem>
          );
        })}
      </div>
    );
  }
}
