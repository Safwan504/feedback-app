import React from 'react';
import Feedback from '../Feedback/Feedback';

const AllFeedBack = ({ feedback, handleDelete}) => {
    if (!feedback || feedback.length === 0) {
        return <h1 className="text-center FeedbackUI">No Reviews Yet</h1>
    } 
    return (
        <div>
            {
                feedback.map(content =>
                    <Feedback
                        content={content}
                        key={content.id}
                        handleDelete={handleDelete}
                        >
                    </Feedback>)
            }
        </div>
    );
};

export default AllFeedBack;