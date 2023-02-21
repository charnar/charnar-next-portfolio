import WorkHeading from "@/components/workheading";
import WorkTag from "@/components/worktag";
import PageWrapper from "@/components/pagewrapper";

export default function Cinnatel() {
  return (
    <PageWrapper>
      <section>
        <WorkHeading
          title="CinnaTel"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ></WorkHeading>

        <ul className="mx-6 my-6 break-all">
          <WorkTag
            tagName="Stack"
            tagContent="HTML CSS JavaScript, PHP, MySQL"
          ></WorkTag>
          <WorkTag
            tagName="GitHub"
            tagContent="https://github.com/charnar/CinnaTel"
            tagLinkFlag={true}
          ></WorkTag>
        </ul>
      </section>
    </PageWrapper>
  );
}
