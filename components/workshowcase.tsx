import { prototype } from "events";
import { TEMPORARY_REDIRECT_STATUS } from "next/dist/shared/lib/constants";
import Image from "next/image";
import { FC } from "react";

const mockData = [
  {
    title: "Work 1",
    link: "/work1",
    description: "This is just a short description about the work",
  },
];

interface WorkItemProp {
  title: string;
  link?: string;
  description?: string;
  imageLink?: string;
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
      <h2 className="">{prop.description}</h2>
    </div>
  );
};

const WorkShowcase: FC = () => {
  {
    const tempData = [
      {
        title: "CinnaTel",
        imageLink: "/images/cinnatel.png",
        description: "A one-line description about work",
      },
    ];

    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4 max-sm:grid-cols-1">
        {/* <WorkItem
          title="WorkItem 1 here"
          imageLink="/images/cinnatel.png"
          description="A one-line description about work"
        ></WorkItem> */}

        {tempData.map((item) => {
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
};

export default WorkShowcase;
