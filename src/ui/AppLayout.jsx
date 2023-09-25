import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        {/* outlet component is provided by react-router-dom and its usage is to show the current child elements in the nested routes. works just like {children} in components*/}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
