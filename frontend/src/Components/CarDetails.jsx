import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/newsletter`,
        { email }
      );

      setMessage(res.data.message);
      setEmail("");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Something went wrong. Try again.");
      }
    }
  };

  return (
    <section className="w-full bg-[#F1BC00] py-10 px-4 mt-20 mb-16 flex flex-col items-center justify-center">
      <h2 className="font-dmserif text-[28px] sm:text-[32px] md:text-[35px] text-black text-center leading-tight capitalize mb-6">
        Subscribe to our newsletters
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col sm:flex-row items-center bg-white rounded-[10px] p-4 gap-3"
      >
        <div className="flex flex-col w-full sm:flex-1">
          <label
            htmlFor="newsletterEmail"
            className="font-roboto text-[16px] text-black/50 capitalize mb-1"
          >
            Email
          </label>

          <input
            type="email"
            id="newsletterEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full h-[40px] px-3 text-[16px] border rounded focus:ring-[#21408E]"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-[112px] h-[45px] bg-[#21408E] text-white text-[18px] rounded-[10px]"
        >
          Submit
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-black font-roboto">
          {message}
        </p>
      )}
    </section>
  );
};

export default Newsletter;
