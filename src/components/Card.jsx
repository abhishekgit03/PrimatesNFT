import { useState } from 'react'
import React from 'react'
import Productoverview from './Productoverview';

  
function Card(props) {

  const [isProductOverviewVisible, setProductOverviewVisible] = useState(false);

  const handleBuyNowClick = () => {
    setProductOverviewVisible(true);
  };

  const handleProductOverviewClose= () => {
    setProductOverviewVisible(false);
  };

  console.log(props)
  return (
    <div className="inline-block mr-4">
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src={props.imgSrc || "http"}
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{props.username}</h1>
    <p className="mt-2 text-sm text-gray-300">
     {props.text}
    </p>
    <button onClick={handleBuyNowClick} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-violet-400">
      {props.btnText}
    </button>
  </div>
</div>
{isProductOverviewVisible && (
  <Productoverview  imgSrc={props.imgSrc} imagename={props.username} onClose={() => setProductOverviewVisible(false)} />
)}
</div>
  )
}

export default Card