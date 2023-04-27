import React, { useState } from "react";
import "./feedback.css";

function FeedbackForm({ handleFeedback }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [improvements, setImprovements] = useState("");
    const [bugs, setBugs] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit form data here
        console.log(
            `Name: ${name}\nEmail: ${email}\nImprovements: ${improvements}\nBugs: ${bugs}`
        );
        setName("");
        setEmail("");
        setImprovements("");
        setBugs("");
    };

    return (
        <div className="form-container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="improvements">
                        How could we improve the app?
                    </label>
                    <textarea
                        id="improvements"
                        value={improvements}
                        onChange={(e) => setImprovements(e.target.value)}
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="bugs">
                        Did you find any bugs in the app?
                    </label>
                    <textarea
                        id="bugs"
                        value={bugs}
                        onChange={(e) => setBugs(e.target.value)}
                    ></textarea>
                </div>

                <button onClick={() => handleFeedback()} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FeedbackForm;
