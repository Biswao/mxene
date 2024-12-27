import React from 'react'

 function MyButton(props) {
  return (
    <button className="bg-gray-800 text-white py-2 px-4 mt-4 rounded hover:bg-gray-600" style={{border:'1px solid white'}}>
              {props.name}
            </button>
  )
}


 
export default MyButton;