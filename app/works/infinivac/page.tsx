import PageWrapper from "@/components/pagewrapper";
import WorkHeading from "@/components/workheading";
import WorkTag from "@/components/worktag";

export default function Infinivac() {
  return (
    <PageWrapper>
      <section>
        <WorkHeading
          title="InfiniVac"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></WorkHeading>

        <ul className="my-4 px-6">
          <WorkTag
            tagName="Figma"
            tagContent="https://www.figma.com/file/7BrxroB4JEGnre3n2tXJYC/InfiniVac?node-id=0%3A1&t=iuse87EV0bW0KbGz-1"
            tagLinkFlag={true}
          ></WorkTag>
        </ul>
      </section>
    </PageWrapper>
  );
}
