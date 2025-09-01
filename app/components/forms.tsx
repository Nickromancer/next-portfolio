"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message sent!");
          console.log("SUCCESS!");
        },
        (error) => {
          alert(error);
          console.log("FAILED...", error.text);
        }
      );
    form.current?.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <label></label>
      <input
        className="p-3 rounded-sm bg-transparent border-solid border-2 border-white text-white focus:bg-[#0c0f2b] ease-in-out duration-100"
        type="text"
        name="user_name"
        placeholder="Name"
        required
      />
      <label></label>
      <input
        className="p-3 rounded-sm bg-transparent border-solid border-2 border-white text-white focus:bg-[#0c0f2b] ease-in-out duration-100  "
        type="email"
        name="user_email"
        placeholder="Mail"
        required
      />
      <label></label>
      <textarea
        className="p-3 rounded-sm bg-transparent border-solid border-2 border-white text-white resize-none focus:bg-[#0c0f2b] ease-in-out duration-100 h-44 "
        name="message"
        placeholder="Message"
        required
      />
      <button
        className=" bg-orange hover:bg-white focus:bg-white ease-in-out duration-100 text-white font-semibold rounded-sm text-lg mt-2
         h-10 w-40"
        type="submit"
        value="Send"
      >
        Send!
      </button>
    </form>
  );
};

export default ContactUs;
