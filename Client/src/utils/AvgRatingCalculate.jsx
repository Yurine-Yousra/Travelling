// AvgRatingCalculate.js

function CalculateAvgRating(reviews) {
    let totalRating = 0;
    reviews?.forEach(review => {
        totalRating += review.rating;
    });
    const before = reviews?.length > 0 ? totalRating / reviews?.length : 0;
    const avgRating = before.toFixed(1)

    return {
        totalRating,
        avgRating
    };
}

export default CalculateAvgRating;
