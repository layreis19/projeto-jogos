import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <nav>Navbar</nav>
     <Outlet/>
      <footer>Nosso Footer</footer>
    </div>
  );
}