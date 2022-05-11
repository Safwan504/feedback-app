import React from 'react';

const FeedbackStat = ({ feedback }) => {

    let average = feedback.reduce((acc, cur) => {
        return acc+cur.rating
    }, 0) / feedback.length
    
    average = average.toFixed(1)
    return (
        <div className="container">
            <h6 className="text-center mb-2 mt-2"><strong>Average Rating: {average}⭐</strong></h6>
        </div>
    );
};

export default FeedbackStat;