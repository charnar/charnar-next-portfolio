import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { WorkItemProp } from "@/interfaces/workpageprops";

const renderImageCover = (image: StaticImageData) => {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-video">
      <Image
        src={image}
        alt="Work Image"
        fill
        style={{ objectFit: "cover" }}
        placeholder="blur"
      />
    </div>
  );
};

const WorkItem: React.FC<WorkItemProp> = ({
  title,
  image,
  link,
  description,
  externalFlag,
}: WorkItemProp) => {
  return (
    <div className="text-center flex flex-col ">
      {externalFlag ? (
        <a href={link} target="_blank">
          {renderImageCover(image)}
        </a>
      ) : (
        <Link href={`/works/${link}`}>{renderImageCover(image)}</Link>
      )}

      <h1 className="font-semibold mt-1 text-lg">{title}</h1>
      <h2 className="text-md">{description}</h2>
    </div>
  );
};

export default WorkItem;
