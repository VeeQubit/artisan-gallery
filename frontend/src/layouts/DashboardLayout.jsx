import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { useState } from "react";

import { FiMenu } from "react-icons/fi";



function DashboardLayout({ children }) {

  const [openSidebar, setOpenSidebar] = useState(false);



  return (

    <div
      className="
        flex

        h-screen

        overflow-hidden

        bg-gradient-to-br
        from-[#FFF7FA]
        via-[#F8E8EF]
        to-[#F3D6E1]
      "
    >



      {/* DESKTOP SIDEBAR */}
      <div
        className="
          hidden

          md:block

          h-screen

          shrink-0
        "
      >

        <Sidebar />

      </div>






      {/* MOBILE SIDEBAR */}
      <AnimatePresence>

        {

          openSidebar && (

            <>

              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                exit={{
                  opacity: 0
                }}

                onClick={() => setOpenSidebar(false)}

                className="
                  fixed

                  inset-0

                  bg-black/40

                  z-40

                  md:hidden
                "
              />




              <motion.div
                initial={{
                  x: -300
                }}
                animate={{
                  x: 0
                }}
                exit={{
                  x: -300
                }}
                transition={{
                  duration: .35
                }}

                className="
                  fixed

                  left-0

                  top-0

                  z-50

                  md:hidden
                "
              >

                <Sidebar
                  closeSidebar={() => setOpenSidebar(false)}
                />

              </motion.div>


            </>

          )

        }

      </AnimatePresence>







      <div
        className="
          flex-1

          h-screen

          flex

          flex-col

          overflow-hidden
        "
      >




        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpenSidebar(true)}

          className="
            md:hidden

            fixed

            top-5

            right-7

            z-30


            w-12

            h-12


            rounded-2xl


            bg-[#7A1232]


            text-white


            flex

            items-center

            justify-center


            shadow-xl

            hover:scale-105

            transition
          "
        >

          <FiMenu size={24} />

        </button>







        <motion.div
          initial={{
            y: -50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: .6,
            delay: .25
          }}

          className="
            shrink-0
          "
        >

          <Navbar />

        </motion.div>







        <motion.main
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: .6,
            delay: .4
          }}

          className="
            flex-1

            p-8

            overflow-y-auto
          "
        >

          {children}

        </motion.main>




      </div>




    </div>

  );

}



export default DashboardLayout;