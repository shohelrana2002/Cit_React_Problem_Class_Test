import React, { useState } from "react";

const InputFieldButton = () => {
  const [valueText, setValueText] = useState("");
  console.log(valueText);
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const message = from.message.value;

    setValueText([name, email, message]);
  };
  return (
    <>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <input
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
            type="submit"
            value="Submit"
          />
        </form>
        {valueText.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Submitted Data:
            </h3>
            <ul className="space-y-2 mt-3">
              <li>
                <strong>Name:</strong> {valueText[0]}
              </li>
              <li>
                <strong>Email:</strong> {valueText[1]}
              </li>
              <li>
                <strong>Message:</strong> {valueText[2]}
              </li>
            </ul>
          </div>
        ) : (
          <p className="mt-6 text-gray-500"></p>
        )}
      </div>
    </>
  );
};

export default InputFieldButton;
