import React from "react"

const Menu = () => {
  return (
    <div className="w-full mb-6">
      <p className="mb-2 title">Menu</p>
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-col items-center w-1/2">
          <p className="text-xl">Cakes</p>
          <div className="flex flex-row mb-2">
            <div>
              <p className="text-base">6"/12 servings</p>
              <p className="text-base">8"/28 servings</p>
              <p className="text-base">10"/42 servings</p>
            </div>
            <div className="mx-1"></div>
            <div>
              <p className="text-base">$45+</p>
              <p className="text-base">$60+</p>
              <p className="text-base">$85+</p>
            </div>
          </div>
          <p className="text-xs">* All my cakes are 3 layers</p>
        </div>
        <div className="h-32 border-l border-gray-900 border-solid rounded-full"></div>
        <div className="flex flex-col items-center w-1/2">
          <p className="text-xl">Cupcakes</p>
          <div className="flex flex-row mb-2">
            <div>
              <p className="text-base">Buttercream</p>
              <p className="text-base">Fondant</p>
              <p className="text-base text-transparent">123</p>
            </div>
            <div className="mx-1"></div>
            <div>
              <p className="text-base">$30+</p>
              <p className="text-base">$45+</p>
              <p className="text-base text-transparent">123</p>
            </div>
          </div>
          <p className="text-xs">* Price is for a dozen</p>
        </div>
      </div>
    </div>
  )
}

export default Menu
