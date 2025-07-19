import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dummyUsers from "../../data/dummyUsers";

const ApprovalDashboard = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [messageUser, setMessageUser] = useState(null);
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  // Redirect to /hireperson if user presses browser back
  useEffect(() => {
    const handlePopState = () => {
      navigate("/hireperson", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);

  const handleAction = (id, action) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
    console.log(`${action.toUpperCase()} user with ID:`, id);
  };

  const handleSendMessage = () => {
    if (messageUser) {
      console.log("Send message to:", messageUser.email);
      console.log("Message:", messageText);
    }
    setMessageText("");
    setMessageUser(null);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto bg-gray-100 min-h-screen">
      <div className="overflow-x-auto bg-white shadow rounded-xl">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">User Type</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Service</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Aadhar</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center p-6 text-gray-500">
                  No pending users.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-yellow-50 transition duration-150">
                  <td className="p-3">{user.userType}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.serviceType}</td>
                  <td className="p-3">{user.mobile}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.address}</td>
                  <td className="p-3">
                    <a
                      href={user.aadharImageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-500 underline hover:text-yellow-600"
                    >
                      View
                    </a>
                  </td>
                  <td className="p-3">
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => handleAction(user.id, "approve")}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-xl"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleAction(user.id, "reject")}
                        className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-xl"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => setMessageUser(user)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-xl"
                      >
                        Message
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Message Modal */}
      {messageUser && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-1">
              Send Message to {messageUser.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{messageUser.email}</p>
            <textarea
              className="w-full border rounded-lg p-3 text-sm h-32 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Write your message here..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            ></textarea>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setMessageUser(null)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovalDashboard;
