import WorkTag from "@/components/worktag";
import WorkHeading from "@/components/workheading";
import PageWrapper from "@/components/pagewrapper";

export default function Druid() {
  return (
    <PageWrapper>
      <section>
        <WorkHeading
          title="Druid"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></WorkHeading>

        <ul className="list-none mx-6 my-6">
          <WorkTag tagName="Tech" tagContent="Arduino, Kotlin"></WorkTag>
          <WorkTag
            tagName="GitHub"
            tagContent="https://github.com/conancom/Druid-Plant-Monitoring"
            tagLinkFlag={true}
          ></WorkTag>
        </ul>
      </section>
    </PageWrapper>
  );
}
