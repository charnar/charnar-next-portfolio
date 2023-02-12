import WorkItem from "@/components/workitem";

const getServerSideProps = async () => {};

export default function Works() {
  return (
    <section>
      <h1 className="text-gold-yellow decoration-underline-light-cream text-xl font-bold underline underline-offset-8 decoration-2 mb-2">
        Projects
      </h1>

      <WorkItem title="Work goes here"></WorkItem>
    </section>
  );
}
