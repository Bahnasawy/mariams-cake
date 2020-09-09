import React, { useState, useRef } from "react"
import Navbar from "@components/navbar"
import AboutMe from "@components/aboutMe"
import Gallery from "@components/gallery"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import MessengerCustomerChat from "react-messenger-customer-chat"

const index = () => {
  const [posTop, setPosTop] = useState(0)
  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) >= 50 || Math.abs(currPos.y) == 0) {
      setPosTop(Math.abs(currPos.y))
    }
  })
  return (
    <div className="text-gray-900 bg-pink-300 font-cursive">
      <MessengerCustomerChat
        pageId="122129299564739"
        appId="638454893734813"
        htmlRef={window.location.pathname}
      />
      <div className="flex flex-col items-center mx-6 text-3xl">
        <div className="sticky top-0 z-10 w-full bg-pink-300">
          <Navbar scrollPos={posTop} />
        </div>
        <AboutMe />
        <Gallery />
        <MessengerCustomerChat
          pageId="<PAGE_ID>"
          appId="<APP_ID>"
          htmlRef="<REF_STRING>"
        />
      </div>
    </div>
  )
}

export default index
