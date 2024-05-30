import React, { useState, useEffect } from 'react'

const ResultOutput = ({color}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full mt-3">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-100">
          <div className="flex items-center">
            <div className={`rounded-full ${color} w-8 h-8 flex items-center justify-center`}>
              <p className="text-white font-bold">B</p>
            </div>
            <p className="ml-2 font-bold text-gray-800">Great!</p>
          </div>
          <p className="text-gray-600 text-sm">Result here</p>
        </div>
        <div className="px-4 py-3">
          <h3 className="text-xl font-bold mb-2">
            <React.Fragment>Result here</React.Fragment>
          </h3>
          <p className="text-gray-800 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            itaque maiores cupiditate aut illum voluptatum commodi ipsam.
            Voluptate, excepturi dolore. Eveniet, perferendis quos earum
            deleniti iure inventore dolor exercitationem? Quasi!
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResultOutput
