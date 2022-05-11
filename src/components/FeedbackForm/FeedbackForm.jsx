import React, { useState } from 'react';
import '../Feedback/Feedback.css'
import Ratings from '../Ratings/Ratings';

const FeedbackForm = ({ handleFeedback }) => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] =  useState(10)
    const handleChange = (e) => {
        if(e.target.value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if(e.target.value !== '' && e.target.value.trim().length < 10){
            setMessage("Feedback must be at least 10 characters")
            setBtnDisabled(true)
        } else{
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length >= 10 && rating > 0){
            const newFeedback = {
                text: text,
                rating: rating
            }
            handleFeedback(newFeedback)
            setText('')
            setBtnDisabled(true)
        }
    }
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mb-5">
                <div className="text-center feedbackItems">
                    <h4 className="mb-2">How Would You Like To Rate Us.</h4>
                    <Ratings select = {(rate) => setRating(rate) }></Ratings>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            onChange={handleChange}
                            placeholder="Write a review..."
                            type="text"
                            value={text}
                            rows="3" cols="44"
                            className="rounded"
                        /><br />
                        <button type="submit" disabled={btnDisabled} className="btn btn-light mt-2 submitBtn">Submit</button>
                        {
                            message && <p className="text-danger">{message}</p>
                        }
                    </form>
                </div>
            </div>

        </div>
    );
};

export default FeedbackForm;