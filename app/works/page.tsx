import WorkShowcase from "@/components/workshowcase";
import { works as worksList, oldWorks as oldWorksList } from "@/data/works";

import PageWrapper from "@/components/pagewrapper";

export default function Works() {
  return (
    <PageWrapper>
      <section className="mb-12">
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Projects
        </h1>

        <WorkShowcase works={worksList}></WorkShowcase>
      </section>

      <section>
        <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-semibold underline underline-offset-8 decoration-2 mb-4">
          Old Works
        </h1>

        <WorkShowcase works={oldWorksList}></WorkShowcase>
      </section>
    </PageWrapper>
  );
}
