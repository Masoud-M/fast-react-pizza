import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
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
