import React from 'react';
import { customerReviews } from '../data/customerReviews';
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user3 from "../assets/user3.png";
import user4 from "../assets/user4.png";

// Map of user images for easy reference
const userImages = { user1, user2, user3, user4 };

const CustomerReviews = () => {
  // Shuffle reviews and ensure no adjacent same images
  const shuffledReviews = React.useMemo(() => {
    const reviews = [...customerReviews];
    for (let i = reviews.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      if (j > 0 && reviews[j].image === reviews[j - 1].image) continue;
      [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
    }
    return reviews;
  }, []);

  // Split reviews into two sets for seamless loop
  const displayReviews = React.useMemo(() => {
    return [...shuffledReviews.slice(0, 4), ...shuffledReviews.slice(4, 8)];
  }, [shuffledReviews]);

  return (
    <section className="mt-16 sm:mt-20 mb-16 sm:mb-20 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        Customer Reviews
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {displayReviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-64 sm:w-80 h-auto sm:h-80 bg-white rounded-xl shadow-lg p-4 sm:p-6 mx-2 sm:mx-4"
            >
              <div className="flex items-center mb-4">
                <img
                  src={userImages[review.image]}
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="ml-3 sm:ml-4">
                  <h3 className="font-semibold text-base sm:text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{review.review}</p>
              <p className="text-sm text-gray-500 italic">{review.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 