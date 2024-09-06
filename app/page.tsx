import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

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
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                categoryId={1}
                items={[
                  {
                    id: "1",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",
                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "2",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "3",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "4",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: "5",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Mix"
                categoryId={2}
                items={[
                  {
                    id: "1",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",
                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "2",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "3",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 10,
                    items: [{ price: 10 }],
                  },
                  {
                    id: "4",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",

                    price: 15,
                    items: [{ price: 15 }],
                  },
                  {
                    id: "5",
                    name: "Margherita",
                    imageUrl: "/images/pizza-2.webp",
                    price: 15,
                    items: [{ price: 15 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
