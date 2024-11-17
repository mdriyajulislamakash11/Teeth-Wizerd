import React from 'react';
import FeedbackCard from '../FeedbackCad/FeedbackCard';

const FeedBack = ({feedBackData}) => {
    console.log(feedBackData)
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-4">
                {
                    feedBackData.map(feedback => <FeedbackCard feedback={feedback}></FeedbackCard>)
                }
            </div>
        </div>
    );
};

export default FeedBack;