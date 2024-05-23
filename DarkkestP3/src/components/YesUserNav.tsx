import { useAuth } from "../context/AuthContext";



const YesUserNav = () => {
  const { logoutUser } = useAuth();


  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="flex items-center gap-8">
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-lg text-white bg-primary-green rounded-md hover:bg-green-700"
      >
        Logout
      </button>
    </div>
  );
};

export default YesUserNav;
