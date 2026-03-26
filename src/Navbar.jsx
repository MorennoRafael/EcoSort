import {
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  useState,
  useRef,
  useEffect,
} from "react";

import logo from "./assets/logo.jpeg";
import userImg from "./assets/user.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("loginUser") || "null"
  );

  const profileRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("loginUser");
    navigate("/login");
  };

  const menus = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/scan", label: "Scan" },
    { to: "/reward", label: "Reward" },
    { to: "/about", label: "About" },
    { to: "/content", label: "content" },
    { to: "/contact", label: "Contact" },
  ];

  // klik luar
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">

      {/* CONTAINER */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 flex items-center justify-between py-3">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 select-none"
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 rounded-lg object-cover shadow-sm"
          />

          <span className="text-2xl font-bold text-green-600 tracking-wide">
            EcoSort
          </span>
        </Link>


        {/* RIGHT DESKTOP */}
        <div className="hidden md:flex items-center gap-6">

          {/* MENU */}
          <ul className="flex items-center gap-4 text-sm font-medium">
            {menus.map((item, i) => {
              const isActive =
                location.pathname === item.to;

              return (
                <NavLink
                  key={i}
                  to={item.to}
                  className={`
                    relative px-4 py-2 rounded-md transition
                    ${isActive
                      ? "bg-gray-100 text-green-600"
                      : "text-gray-600 hover:text-green-600"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span
                      className="
                      absolute left-1/2 -translate-x-1/2
                      bottom-[-8px]
                      w-8 h-[3px]
                      bg-green-600 rounded-full
                    "
                    ></span>
                  )}
                </NavLink>
              );
            })}
          </ul>


          {/* PROFILE */}
          <div
            className="relative"
            ref={profileRef}
          >
            <img
              src={userImg}
              alt="user"
              onClick={() =>
                setOpenProfile(!openProfile)
              }
              className="
                w-10 h-10
                rounded-full
                cursor-pointer
                border-2 border-green-500
                hover:scale-105
                transition
              "
            />

            {openProfile && user && (
              <div
                className="
                absolute right-0 mt-3 w-64
                bg-white
                rounded-2xl
                shadow-xl
                border border-gray-100
                overflow-hidden
              "
              >

                {/* HEADER */}
                <div className="flex items-center gap-3 p-4 bg-green-50">

                  <img
                    src={userImg}
                    alt="user"
                    className="w-12 h-12 rounded-full border-2 border-green-500"
                  />

                  <div>
                    <p className="font-semibold text-gray-800">
                      {user.nama}
                    </p>

                    <p className="text-xs text-gray-500">
                      {user.email}
                    </p>
                  </div>

                </div>

                {/* INFO */}
                <div className="px-4 py-3 text-sm text-gray-600">
                  Gender :
                  <span className="font-medium ml-1">
                    {user.jk}
                  </span>
                </div>

                <div className="border-t"></div>

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="
                  w-full
                  text-left
                  px-4
                  py-3
                  text-red-500
                  font-medium
                  hover:bg-red-50
                  transition
                  "
                >
                  Logout
                </button>

              </div>
            )}
          </div>

        </div>


        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>


      {/* MOBILE MENU */}
      {open && (
        <div
          ref={mobileMenuRef}
          className="md:hidden px-4 pb-4 space-y-2 bg-white shadow"
        >
          {menus.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                block px-4 py-2 rounded-lg text-sm
                ${isActive
                  ? "bg-gray-100 text-green-600"
                  : "text-gray-600 hover:bg-gray-50"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  );
}

export default Navbar;