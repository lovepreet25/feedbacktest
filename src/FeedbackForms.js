import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./App.css";
import {useState} from "react";

const FeedbackForms = ({onSubmit}) => {
const [score, setScore] = useState("10");
const [msg, setMsg] = useState("");
 const isDisabled = Number(score) < 5 && msg.length <=10;
const textAreaPlaceholder = isDisabled ? "Please provide more details" : "Optional feedback";
const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score, msg});
    
};
return (
<div className="feedback-form">
    <form onSubmit={handleSubmit}>
       <fieldset>
        <h2>Feedback Form</h2>
        <div className="Field">
            <label htmlFor="score">Score: {score} ⭐️ </label>
            <input id= "score" type="range" min="0" max="10" value={score} onChange={(e) => setScore(e.target.value)} />
        </div>
        <div className="Field">
            <label htmlFor="msg">Message: </label>
            <textarea id = "msg" placeholder={textAreaPlaceholder} value={msg} onChange={(e) => setMsg(e.target.value)} />
        </div>
        <div className="Field">
            <button type="submit" disabled={isDisabled}>Submit</button>
        </div>
        </fieldset>
     </form>
    
 </div>
 )
}
export default FeedbackForms;