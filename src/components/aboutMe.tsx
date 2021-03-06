import React from "react"
import baker from "@imgs/baker.jpg"

const AboutMe = () => {
  return (
    <div className="w-full mt-3">
      <p className="title">About Me</p>
      <div className="flex flex-col items-center">
        <img
          src={baker}
          alt="Mariam"
          className="object-cover w-48 h-48 rounded-full"
        />
        <p className="mt-4 text-xs text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus eget
          faucibus convallis in vitae. Sagittis, nulla rutrum at tristique in
          sapien nulla sit. Diam feugiat urna, pulvinar nunc fringilla enim.
          Fermentum, nulla scelerisque nunc sem velit purus non adipiscing. Ut
          viverra mollis id sit. Et ullamcorper mattis vel tincidunt. Quisque
          pharetra, est montes, lectus vestibulum amet eget. Aliquam sed sodales
          duis urna. Amet pellentesque facilisi diam fermentum ipsum accumsan
          volutpat. Pretium malesuada neque neque sit. Ullamcorper turpis erat
          cras mauris elementum. Ullamcorper auctor cum ac eget adipiscing
          nullam augue.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
