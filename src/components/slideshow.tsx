import React, { useReducer } from "react"
import { useTransition, animated } from "react-spring"

const images = [
  "https://res.cloudinary.com/bahnasawy/image/upload/v1598821563/red-velvet-cake-slice-2-225x225_srmxtv.jpg",
  "https://res.cloudinary.com/bahnasawy/image/upload/v1598821560/delish-191907-pumpkin-cake-0036-landscape-pf-1564152322.png_yi5lbr.png",
  "https://res.cloudinary.com/bahnasawy/image/upload/v1598821558/vanilla-cake-4_iezwvi.jpg",
  "https://res.cloudinary.com/bahnasawy/image/upload/v1598821558/easy-funfetti-confetti-cake_qpbzzt.jpg",
]

const SlideShow = () => {
  const Reducer = (state: any, action: any) => {
    switch (action) {
      case "+":
        const plus =
          state.counter + 1 > images.length - 1 ? 0 : state.counter + 1
        return { image: images[plus], counter: plus }
      case "-":
        const minus =
          state.counter - 1 < 0 ? images.length - 1 : state.counter - 1
        return { image: images[minus], counter: minus }
      default:
        return state.counter
    }
  }

  const [state, dispatch] = useReducer(Reducer, {
    image: images[0],
    counter: 0,
  })

  const transistions = useTransition(state.image, image => image, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { friction: 75 },
  })
  return (
    <div className="flex items-center my-4 text-4xl">
      <button
        className="mr-6 transition-opacity focus:outline-none"
        onClick={() => dispatch("-")}
      >
        {"<"}
      </button>
      <div className="relative flex items-center justify-center w-64 h-64">
        {transistions.map(({ item, props, key }) => (
          <animated.img
            src={item}
            key={key}
            style={props}
            className="absolute top-0 object-cover w-64 h-64 rounded-lg"
          />
        ))}
      </div>
      <button
        className="ml-6 transition-opacity focus:outline-none"
        onClick={() => dispatch("+")}
      >
        {">"}
      </button>
    </div>
  )
}

export default SlideShow
