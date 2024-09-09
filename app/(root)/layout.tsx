import { Header } from "@/shared/components/shared";
// export const metaData: MetaData = {
//   title: "Pizza | Home",
// };
export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
    </main>
  );
}
