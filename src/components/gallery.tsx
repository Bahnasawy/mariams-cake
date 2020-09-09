import React from "react"
import SlideShow from "./slideshow"

const Gallery = () => {
  return (
    <div className="w-full my-3">
      <p className="mb-2 title">Gallery</p>
      <div className="flex flex-col items-center w-full h-full">
        <SlideShow />
        <div className="w-full my-2">
          <hr className="mx-8 border-b border-gray-900 border-solid rounded-full" />
        </div>
        <SlideShow />
      </div>
    </div>
  )
}

export default Gallery
