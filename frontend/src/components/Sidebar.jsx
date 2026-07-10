import {
  NavLink,
  useNavigate
} from "react-router-dom";


import {
  FiGrid,
  FiBox,
  FiTag,
  FiLogOut,
  FiLayers,
  FiX
} from "react-icons/fi";


import { motion } from "framer-motion";


import toast from "react-hot-toast";



function Sidebar({ closeSidebar }) {

  const navigate = useNavigate();


  const logout = () => {

    localStorage.clear();

    toast.success(
      "Logged out successfully"
    );

    navigate("/");

  };



  const menu = [

    {
      name: "Overview",
      path: "/dashboard",
      icon: <FiGrid />
    },

    {
      name: "Products",
      path: "/products",
      icon: <FiBox />
    },

    {
      name: "Categories",
      path: "/categories",
      icon: <FiTag />
    }

  ];



  return (

    <motion.aside
      initial={{
        x: -80,
        opacity: 0
      }}
      animate={{
        x: 0,
        opacity: 1
      }}
      className="
        relative

        w-72
        h-screen

        sticky
        top-0
        self-start

        bg-gradient-to-b
        from-[#3B0617]
        via-[#64132D]
        to-[#8A2347]

        text-white
        p-6

        shadow-2xl

        flex
        flex-col
      "
    >


      {/* MOBILE CLOSE BUTTON */}
      <button
        onClick={closeSidebar}
        className="
          md:hidden

          absolute
          top-5
          right-5

          w-9
          h-9

          rounded-xl

          bg-white/20

          flex
          items-center
          justify-center

          hover:bg-white/30

          transition
        "
      >

        <FiX />

      </button>



      {/* LOGO */}
      <div
        className="
          flex
          items-center
          gap-3

          mb-14
        "
      >


        <div

className="

w-14

h-14

rounded-2xl

bg-white/20

flex

items-center

justify-center

overflow-hidden

shadow-lg

"

>


<img

src="/logo.png"

alt="Artisan Logo"

className="

w-10

h-10

object-contain

"

/>


</div>



        <div>

          <h1
            className="
              text-xl
              font-bold
            "
          >
            Artisan
          </h1>


          <p
            className="
              text-xs
              text-white/60
            "
          >
            Inventory System
          </p>

        </div>


      </div>




      {/* MENU */}
      <div
        className="
          space-y-3
          flex-1
        "
      >

        {
          menu.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>

                `
                  flex
                  items-center
                  gap-4

                  px-5
                  py-4

                  rounded-2xl

                  transition
                  font-medium

                  ${
                    isActive
                      ?
                      "bg-white text-[#7A1232] shadow-xl"
                      :
                      "text-white/75 hover:bg-white/15"
                  }
                `

              }
            >

              <span className="text-xl">
                {item.icon}
              </span>

              {item.name}

            </NavLink>

          ))
        }

      </div>




      <button
        onClick={logout}
        className="
          flex
          items-center
          gap-4

          px-5
          py-4

          rounded-2xl

          text-white/80

          hover:bg-white/15

          transition
        "
      >

        <FiLogOut />

        Logout

      </button>



    </motion.aside>

  );

}


export default Sidebar;