import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  const navgation = useNavigation();
  return (
    <div>
      <Header />
      {navgation.state === "loading" ? <p>loading...</p> : <Outlet></Outlet>}
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Home;
