import WorkHeading from "@/components/workheading";
import WorkTag from "@/components/worktag";

export default function GLProject() {
  return (
    <section>
      <WorkHeading
        title="GL Project"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ></WorkHeading>

      <ul className="my-4 px-6 break-all">
        <WorkTag
          tagName="Stack"
          tagContent="Vue.js SaSS, Spring Boot, PostgreSQL"
        ></WorkTag>
        <WorkTag
          tagName="Site"
          tagContent="https://gl-project.vercel.app"
          tagLinkFlag={true}
        ></WorkTag>
      </ul>
    </section>
  );
}
