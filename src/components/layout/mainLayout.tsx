import { Outlet } from "react-router-dom";
import { Navbar } from "./header";
import { Footer } from "./footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className='sm:container mx-auto w-[90vw] h-auto scroll-smooth min-h-[calc(100vh_-_64px_-_64px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
