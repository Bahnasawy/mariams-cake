import React, { useReducer } from "react"

const reducer = (state: Mail, action: Action) => {
  let temp = { ...state }
  temp.pickup = true
  switch (action.type) {
    case "fullName":
    case "phone":
    case "email":
    case "occasion":
    case "order":
    case "date":
      typeof action.value !== typeof true && (temp[action.type] = action.value)
    case "pickup":
      temp.pickup = action.value
    default:
      return temp
  }
}

const Mail = () => {
  return (
    <div className="w-full mb-2">
      <p className="title">Get a Quote</p>
    </div>
  )
}

export default Mail
