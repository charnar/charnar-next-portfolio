import WorkShowcase from "@/components/workitem";
import cinnatelImg from "public/images/cinnatel.png";
import oldPortfolioImg from "public/images/old_portfolio.png";
import glProjectImg from "public/images/glproject.png";
import infinivacImg from "public/images/infinivac.png";
import druidImg from "public/images/druid.png";

import PageWrapper from "@/components/pagewrapper";
import WorkItem from "@/components/workitem";

export const metadata = {
  title: "charnar | Works",
};

export default function Works() {
  return (
    <PageWrapper>
      <section className="mb-12">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Projects
        </h1>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4 max-sm:grid-cols-1">
          <WorkItem
            key="cinnatel"
            title="Cinnatel"
            link="cinnatel"
            description="A Hotel Database Management system"
            image={cinnatelImg}
          ></WorkItem>
          <WorkItem
            key="infinivac"
            title="InfiniVac"
            link="infinivac"
            description="The only app you need to help get through the pandemic!"
            image={infinivacImg}
          ></WorkItem>
          <WorkItem
            key="glproject"
            title="GL Project"
            link="glproject"
            description="A library full of your games!"
            image={glProjectImg}
          ></WorkItem>

          <WorkItem
            key="druid"
            title="Druid"
            link="druid"
            description="A plant based monitoring system"
            image={druidImg}
          ></WorkItem>
        </div>
      </section>

      <section>
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Old Works
        </h1>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4 max-sm:grid-cols-1">
          <WorkItem
            key="old-portfolio"
            title="My First Portfolio Site"
            link="https://charnar-portfolio.netlify.app"
            description="It's still here!"
            image={oldPortfolioImg}
            externalFlag={true}
          ></WorkItem>
        </div>
      </section>
    </PageWrapper>
  );
}
