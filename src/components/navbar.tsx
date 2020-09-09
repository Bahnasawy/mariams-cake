import React from "react"
import { Helmet } from "react-helmet"
import Insta from "./insta"
import Facebook from "./facebook"
import { useSpring, animated } from "react-spring"

type Props = { scrollPos: number }

const Navbar = ({ scrollPos }: Props) => {
  const toggle = scrollPos >= 50 ? true : false
  const { height, fontSize, paddingTop } = useSpring({
    height: toggle ? "2.5rem" : "5rem",
    fontSize: toggle ? "1.25rem" : "1.875rem",
    paddingTop: toggle ? "0rem" : "4rem",
  })

  return (
    <animated.div className={"w-full my-2"} style={{ height }}>
      <div className="flex flex-row items-center justify-between">
        <Helmet>
          <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>{" "}
        </Helmet>
        <div className="flex flex-row">
          <div className="mr-1">
            <Facebook />
          </div>
          <Insta />
        </div>
        <div className="flex flex-row items-center h-12">
          <animated.p style={{ fontSize, paddingTop }}>
            Mariam's Got Cake
          </animated.p>
        </div>
        <span
          className="text-4xl text-transparent stroke-current iconify"
          data-icon="entypo:dots-three-horizontal"
          data-inline="false"
        ></span>
      </div>
    </animated.div>
  )
}

export default Navbar
