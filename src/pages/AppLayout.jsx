import { Outlet } from "react-router-dom";
import NavigationBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default AppLayout;
