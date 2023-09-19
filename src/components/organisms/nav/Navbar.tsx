import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-end justify-center">
      <Topbar />
      <Sidebar />
    </nav>
  );
};

export default Navbar;
