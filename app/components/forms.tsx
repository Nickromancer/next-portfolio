"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY);

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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <label>Name</label>
      <input className="text-black" type="text" name="user_name" required />
      <label>Email</label>
      <input className="text-black" type="email" name="user_email" required />
      <label>Message</label>
      <textarea className="text-black" name="message" required />
      <button
        className=" bg-white text-black w-auto
         h-10"
        type="submit"
        value="Send"
      >
        Send!
      </button>
    </form>
  );
};

export default ContactUs;
