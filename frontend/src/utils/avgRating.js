// calculateAvgRating.js

/**
 * Calculates total and average rating from an array of review objects.
 * Each review object should have a 'rating' property with a numeric value.
 *
 * @param {Array} reviews - Array of review objects
 * @returns {Object} An object with totalRating and avgRating
 */
const calculateAvgRating = (reviews = []) => {
    // Calculate total rating by summing all ratings in the array
    const totalRating = reviews.reduce((acc, item) => acc + item.rating, 0);
  
    // Calculate average rating
    const avgRating = totalRating === 0 ? "" : (totalRating / reviews.length).toFixed(1);
  
    return {
      totalRating,
      avgRating,
    };
  };
  
  export default calculateAvgRating;
  