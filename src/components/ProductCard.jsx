import React from "react";

function ProductCard( props) {
  return (
    <div className="w-72 bg-white rounded-xl shadow-md overflow-hidden border">
      
      {/* Top Image + Badge */}
      <div className="relative">
        <img
          src={props.data.image}
          alt="boAt Airdopes 161"
          className="w-full h-48 object-cover"
        />
        
        {/* Top Left Badge */}
        <div className="absolute top-2 left-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded-sm flex items-center gap-1">
          🪄 {props.data.badge}
        </div>

        {/* Bottom Left Label */}
        <div className="absolute bottom-0 left-0 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-tr-md flex items-center">
          {props.data.label}
        </div>

        {/* Bottom Right Rating */}
        <div className="absolute bottom-0 right-0 bg-white text-black text-sm font-semibold px-2 py-1 rounded-full shadow-md flex items-center gap-1">
          ⭐ {props.data.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg">{props.data.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-gray-800">₹{props.data.price} </span>
          <span className="line-through text-gray-400 text-sm">₹{props.data.originalPrice}</span>
          <span className="text-green-600 font-semibold text-sm">{props.data.discount}</span>
        </div>

        {/* Bottom Toggle and +3 */}
        <div className="mt-4 flex items-center justify-end gap-2">
            {props.data.colorCodes.map((color)=>{

         return <div style={{backgroundColor:color}} className="w-6 h-6 rounded-full "></div>
            })}
          <div className="text-gray-500 text-sm font-medium">+{props.data.colors} </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
