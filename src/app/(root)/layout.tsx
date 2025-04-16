import Footer from "@/component/footer";
import Header from "@/component/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
        {children}
      </div>
      <Footer />
    </>
  );
}