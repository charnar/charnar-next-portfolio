import Image from "next/image";

const mockData = [
  {
    title: "Work 1",
    link: "/work1",
    description: "This is just a short description about the work",
  },
  {},
];

interface WorkItemProp {
  title: string;
  link?: string;
  description?: string;
  imageLink?: string;
}

const WorkItem = (prop: WorkItemProp) => {
  return <div>{prop.title}</div>;
};

const WorkShowcase = () => {
  {
  }
};

export default WorkShowcase;
