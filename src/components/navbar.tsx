import React from "react"
import { Helmet } from "react-helmet"
import Insta from "./insta"
import Facebook from "./facebook"

const Navbar = () => {
  return (
    <div className="sticky flex flex-row items-center justify-between w-full m-2">
      <Helmet>
        <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>{" "}
      </Helmet>
      <div className="flex flex-row">
        <div className="mr-1">
          <Facebook />
        </div>
        <Insta />
      </div>
      <p className="text-4xl">Mariam's Got Cake</p>
      <span
        className="text-2xl iconify"
        data-icon="entypo:dots-three-horizontal"
        data-inline="false"
      ></span>
    </div>
  )
}

export default Navbar
