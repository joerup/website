import React from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai"; // Import star icon from react-icons

const Reviews = ({ reviews = [] }) => {
  // Function to display 5 star icons
  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <AiFillStar key={index} className="text-yellow-500" />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.length > 0 ? (
          reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-80 rounded-2xl shadow-lg p-6 flex flex-col"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4 font-semibold">{review.text}</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex">{renderStars()}</div>
                <span className="text-gray-500 font-bold">{review.name}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
