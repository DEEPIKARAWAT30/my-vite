import React from "react";

function First(props) {
    return (

        <div className="max-w-sm bg-gray-300 rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
            <img
                className="w-full h-48 object-cover"
                src={props.data.image}// replace with your own image if needed
                alt="Gaming Earbuds"
            />
            <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">{props.data.date}</p>
                <h2 className="text-lg font-semibold mb-2">
                    {props.data.title || "Best Gaming Earbuds for Travel"}
                </h2>
                <p className="text-gray-700 text-sm mb-4">
                    {props.data.description || "Discover the best gaming earbuds designed for travel. Compact, portable, and perfect for on-the-go gaming."}
                </p>
                <button className="px-4 py-2 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
                    Read More
                </button>
            </div>
        </div>
    );
}

export default First;