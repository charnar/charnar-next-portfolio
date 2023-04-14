import Image from "next/image";
import Link from "next/link";
import { WorkItemProp } from "@/interfaces/workpageprops";

const renderImageCover = (imageLink: string, blurImageLink: string) => {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-video">
      <Image
        src={imageLink}
        alt="Work Image"
        fill
        style={{ objectFit: "cover" }}
        blurDataURL={blurImageLink}
        placeholder="blur"
      />
    </div>
  );
};

const WorkItem: React.FC<WorkItemProp> = ({
  title,
  imageLink,
  blurImageLink,
  link,
  description,
  externalFlag,
}: WorkItemProp) => {
  return (
    <div className="text-center flex flex-col ">
      {externalFlag ? (
        <a href={link} target="_blank">
          {renderImageCover(imageLink, blurImageLink)}
        </a>
      ) : (
        <Link href={`/works/${link}`}>
          {renderImageCover(imageLink, blurImageLink)}
        </Link>
      )}

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
              blurImageLink={item.blurImageLink}
              description={item.description}
              link={item.link}
              externalFlag={item.externalFlag}
            ></WorkItem>
          );
        })}
      </div>
    );
  }
}
