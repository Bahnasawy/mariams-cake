import React, { useState } from "react"
import Navbar from "@components/navbar"
import AboutMe from "@components/aboutMe"
import Gallery from "@components/gallery"
import Menu from "@components/menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import MessengerCustomerChat from "react-messenger-customer-chat"
import Helmet from "@components/seo"

const index = () => {
  const [posTop, setPosTop] = useState(0)
  useScrollPosition(({ prevPos, currPos }) => {
    if (Math.abs(currPos.y) >= 50 || Math.abs(currPos.y) == 0) {
      setPosTop(Math.abs(currPos.y))
    }
  })
  return (
    <div className="text-gray-900 bg-pink-300 font-cursive">
      <Helmet title="Mariam's Cake" />
      <div className="flex flex-col items-center mx-6 text-3xl">
        <div className="sticky top-0 z-10 w-full bg-pink-300">
          <Navbar scrollPos={posTop} />
        </div>
        <AboutMe />
        <Gallery />
        <Menu />
        <MessengerCustomerChat
          pageId="122129299564739"
          appId="638454893734813"
          htmlRef={window.location.pathname}
        />
      </div>
    </div>
  )
}

export default index

// <!-- Load Facebook SDK for JavaScript -->
//       <div id="fb-root"></div>
//       <script>
//         window.fbAsyncInit = function() {
//           FB.init({
//             xfbml            : true,
//             version          : 'v8.0'
//           });
//         };

//         (function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk'));</script>

//       <!-- Your Chat Plugin code -->
//       <div class="fb-customerchat"
//         attribution=setup_tool
//         page_id="122129299564739"
//   theme_color="#fbb6ce">
//       </div>
