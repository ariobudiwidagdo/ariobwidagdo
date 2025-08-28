"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      // Send email to recipient (Ario)
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: "Ario Bwidagdo",
          to_email: "ariobwidagdo@gmail.com",
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Send confirmation email to sender
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          to_name: form.name,
          to_email: form.email,
          from_name: "Ario Bwidagdo",
          from_email: "ariobwidagdo@gmail.com",
          message: `Thank you for contacting me! I have received your message:\n\n"${form.message}"\n\nI will get back to you as soon as possible.\n\nBest regards,\nArio Bwidagdo`,
          reply_to: "ariobwidagdo@gmail.com",
          subject: "Thank you for contacting me - Message received",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send message. Please try again later.");
      setStatus("error");
    }
  }

  return (
    <>
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl ${
            theme === "dark"
              ? "bg-gray-800/90 border-gray-700 backdrop-blur-sm"
              : "bg-white/90 border-gray-200 backdrop-blur-sm"
          } shadow-2xl border p-10 sm:p-12`}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 bgcolor: 'blue'"
          >
            <h1
              className={`text-5xl font-extrabold mb-4 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
              }`}
            >
              Contact Me
            </h1>
            <div
              className={`h-1 w-32 mx-auto ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-400 to-indigo-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              } rounded-full mb-4`}
            ></div>
            <p
              className={`text-xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Let&apos;s work together on your next project
            </p>
          </motion.div>
          {status === "success" && (
            <p
              className={`p-5 rounded-lg shadow-sm mb-6 ${
                theme === "dark"
                  ? "bg-green-900/50 text-green-300"
                  : "bg-green-100 text-green-800"
              }`}
            >
              Thank you for your message! I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p
              className={`p-5 rounded-lg shadow-sm mb-6 ${
                theme === "dark"
                  ? "bg-red-900/50 text-red-300"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {error}
            </p>
          )}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`block mb-4 text-lg font-semibold flex items-center gap-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiUser className="w-5 h-5" />
                  </motion.div>
                  Full Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={`w-full rounded-xl px-6 py-4 border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 ${
                    theme === "dark"
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-cyan-500/20 focus:border-cyan-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500"
                  } focus:outline-none`}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`block mb-4 text-lg font-semibold flex items-center gap-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMail className="w-5 h-5" />
                  </motion.div>
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className={`w-full rounded-xl px-6 py-4 border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 ${
                    theme === "dark"
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-cyan-500/20 focus:border-cyan-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500"
                  } focus:outline-none`}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`block mb-4 text-lg font-semibold flex items-center gap-2 ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMessageSquare className="w-5 h-5" />
                  </motion.div>
                  Your Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or just say hello..."
                  className={`w-full rounded-xl px-6 py-4 border-2 transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 resize-none ${
                    theme === "dark"
                      ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-cyan-500/20 focus:border-cyan-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500/20 focus:border-blue-500"
                  } focus:outline-none`}
                />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className={`lg:col-span-2 w-full px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                status === "sending" ? "" : "hover:shadow-lg"
              } ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              }`}
            >
              {status === "sending" ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <FiSend className="w-5 h-5" />
                  Send Message
                </span>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </>
  );
}
