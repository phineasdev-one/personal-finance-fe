import { Outlet } from "react-router-dom";
import ThemeContainer from "./ThemeContainer";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <ThemeContainer attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
      <Navbar />
      <main className='sm:container mx-auto w-[90vw] h-auto scroll-smooth'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </ThemeContainer>
  );
};

export default MainLayout;
