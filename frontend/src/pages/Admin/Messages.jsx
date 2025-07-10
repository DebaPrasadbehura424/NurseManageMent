import React, { useState, useEffect } from "react";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/msg/getAllMessages"
      );
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post("http://localhost:8080/api/msg/delMessage", id, {
        headers: { "Content-Type": "text/plain" },
      });
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-bold text-teal-800">Messages</h2>
        {messages.length === 0 ? (
          <p className="text-gray-500">No messages to display.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="border-b pb-4 space-y-1">
              <p className="text-lg font-semibold text-gray-800">{msg.name}</p>
              <p className="text-sm text-gray-500">{msg.email}</p>
              <p className="text-sm text-gray-500">
                Mobile: {msg.mobileNumber}
              </p>
              <p className="mt-2 text-gray-700">{msg.message}</p>
              <button
                onClick={() => handleDelete(msg.id)}
                className="mt-2 inline-block bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-150"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Messages;
