import { StaticImageData } from "next/image";

export interface WorkHeadingProp {
  title: string;
  description: string;
}

export interface WorkTagProp {
  tagName: string;
  tagContent: string;
  tagLinkFlag?: boolean;
}

export interface WorkDetailsProp {
  workTags: WorkTagProp[];
}

export interface WorkItemProp extends WorkHeadingProp {
  image: StaticImageData;
  link: string;
  tags?: WorkTagProp[];
  externalFlag?: boolean;
}
