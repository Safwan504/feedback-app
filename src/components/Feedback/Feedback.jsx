import './Feedback.css'
const Feedback = ({ content, handleDelete}) => {
    const {rating, text,id} = content;
    // const handleDelete = props.handleDelete;
    // const handleDelete = (id) => {
    //     console.log(id)
    // }
    return (
            <div className="container">
                
                <div className="row d-flex justify-content-center customRow">
                    <div className="feedbackItems text-center">
                        <div className="feedbackRating d-flex align-items-center justify-content-center">{rating}⭐</div>
                        <button onClick = {() => handleDelete(id)} className="close"><i className="fa-solid fa-xmark"></i></button>
                        <div className="feedbackText">{text}</div>
                    </div>
                </div>
            </div>
    );
};

export default Feedback;