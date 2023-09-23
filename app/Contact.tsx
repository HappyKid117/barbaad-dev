// pages/contact.tsx
import { sendEmail } from "@/lib/sendEmail";
import { useState } from "react";

export default function Contact() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await sendEmail(subject, message);
        // Add logic to handle the email sending result
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}
