import React, { useState } from "react";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch("https://formspree.io/f/manybjnk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 hidden md:flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-3xl font-bold">Let's Connect!</h2>
              <p className="mt-4 text-lg leading-relaxed">
                Whether you have a question or just want to say hello, feel free
                to reach out. I'll get back to you as soon as possible!
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Contact Me
            </h2>
            {isSubmitted ? (
              <div className="text-center text-green-600">
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <p>Your message has been sent. I'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  Send Message
                </button>
              </form>
            )}
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-6">
            {/* GitHub */}
            <a
                href="https://github.com/Zar-ufo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transform transition duration-200"
            >
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-8 h-8"
                />
            </a>
            {/* Twitter */}
            <a
                href="https://x.com/UfoZarif"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transform transition duration-200"
            >
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56ZxpPKHkUmZn9jaxEze2R5dINvTb_lS1Dw&s"
                alt="Twitter"
                className="w-8 h-8"
                />
            </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
