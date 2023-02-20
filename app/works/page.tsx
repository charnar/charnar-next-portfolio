import WorkShowcase from "@/components/workshowcase";
import { works as worksList } from "@/data/works";

import PageWrapper from "@/components/page-wrapper";

export default function Works() {
  return (
    <PageWrapper>
      <section>
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-2">
          Projects
        </h1>

        <WorkShowcase works={worksList}></WorkShowcase>
      </section>
    </PageWrapper>
  );
}
