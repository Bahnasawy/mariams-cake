import React from "react"
import SlideShow from "./slideshow"

const Gallery = () => {
  return (
    <div className="w-full my-3">
      <p className="mb-2 title">Gallery</p>
      <div className="flex flex-col items-center w-full h-full">
        <SlideShow />
        <hr className="text-black" />
        <SlideShow />
      </div>
    </div>
  )
}

export default Gallery
