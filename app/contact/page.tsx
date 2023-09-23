'use client' // 👈 use it here

import { useState } from 'react'

export default function SendEmail() {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleSendEmail = async () => {
        if (name === '' || message === '') {
            alert("Please enter your name and a message before you submit.")
        }
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }),
            });
            alert("Message sent!")
        } catch (error) {
            alert('Error in sending message.\n Sorry :(');
        }
    };

    return (
        <div className="p-4 dark:text-white/90 mt-4 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90 mb-4">Hit me up!</h2>
            <div className="mb-6 mt-10">
                <label htmlFor="name" className="block mb-2 text-xl text-gray-900 dark:text-white">Name</label>
                <div className="lg:w-3/4 w-full">
                    <input
                        type="text"
                        id="name"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="&quot;After all this time?&quot;"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
            </div>
            <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-xl text-gray-900 dark:text-white">Message</label>
                <textarea id="message"
                    className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="&quot;Always&quot;"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            
            <div className="flex justify-center items-center h-full">
                <button
                    onClick={handleSendEmail}
                    className="py-2 text-2xl p-4 bg-slate-500 text-white rounded hover:bg-slate-600"
                >
                    Send
                </button>
            </div>
        </div>
    )
}