import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div>
            <Filters className="w-[250px]" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">List products</div>
          </div>
        </div>
      </Container>
    </>
  );
}
