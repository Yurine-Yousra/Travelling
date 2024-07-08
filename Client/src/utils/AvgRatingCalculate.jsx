// AvgRatingCalculate.js

function CalculateAvgRating(reviews) {
    let totalRating = 0;
    reviews.forEach(review => {
        totalRating += review.rating;
    });
    const avgRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    return {
        totalRating,
        avgRating
    };
}

export default CalculateAvgRating;
