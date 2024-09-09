export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>

      <main className="min-h-screen">{children}</main>
    </>
  );
}
