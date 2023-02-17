import WorkShowcase from "@/components/workshowcase";
import { GetStaticProps } from "next";
import { works } from "@/data/works";

interface WorkItemProp {
  title: string;
  imageLink: string;
  link?: string;
  description?: string;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      worksList: works,
    },
  };
};

export default function Works(props: { worksList: WorkItemProp[] }) {
  return (
    <section>
      <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-bold underline underline-offset-8 decoration-2 mb-2">
        Projects
      </h1>

      <WorkShowcase works={props.worksList}></WorkShowcase>
    </section>
  );
}
