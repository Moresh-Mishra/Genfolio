import React, { useMemo } from 'react';
import { customerReviews } from '../data/customerReviews';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';
import user4 from '../assets/user4.png';
import '../styles/customerReviews.css';

// Map of user images for easy reference
const userImages = {
  user1,
  user2,
  user3,
  user4
};

const CustomerReviews = () => {
  // Shuffle reviews and ensure no adjacent same images
  const shuffledReviews = useMemo(() => {
    const reviews = [...customerReviews];
    for (let i = reviews.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      if (j > 0 && reviews[j].image === reviews[j - 1].image) continue;
      [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
    }
    return reviews;
  }, []);

  // Create a duplicate set for seamless loop
  const displayReviews = useMemo(() => {
    return [...shuffledReviews, ...shuffledReviews];
  }, [shuffledReviews]);

  return (
    <section className="mt-16 sm:mt-20 mb-16 sm:mb-20 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
        Customer Reviews
      </h2>
      <div className="reviews-container">
        <div className="reviews-track">
          {displayReviews.map((review, index) => (
            <div key={`${review.id}-${index}`} className="review-card">
              <div className="review-header">
                <img
                  src={userImages[review.image]}
                  alt={review.name}
                  className="review-avatar"
                />
                <div className="review-info">
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-role">{review.role}</p>
                  <div className="review-rating">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">{review.review}</p>
              <p className="review-company">{review.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews; 