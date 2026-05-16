import {
  useAuth
} from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <div className="bg-black text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">
        3D Viewer
      </h1>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;