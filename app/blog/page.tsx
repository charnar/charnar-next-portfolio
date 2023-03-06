import Development from "@/components/development";
import PageWrapper from "@/components/pagewrapper";

export const metadata = {
  title: 'charnar | Blog',
};

export default function Blog() {
  return (
    <PageWrapper>
      <section>
        <Development></Development>
      </section>
    </PageWrapper>
  );
}
