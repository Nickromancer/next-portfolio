"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@headlessui/react";

const Contact = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY!);
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const templateParams = {
      name: nameRef.current?.value || "",
      email: emailRef.current?.value || "",
      subject: subjectRef.current?.value || "",
      message: messageRef.current?.value || "",
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        function (response: any) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thanks, message sent successfully");
        },
        function (error: any) {
          alert("OOPs something went wrong... Try again later");
          console.log("FAILED...", error);
        }
      );
    nameRef.current && (nameRef.current.value = "");
    emailRef.current && (emailRef.current.value = "");
    subjectRef.current && (subjectRef.current.value = "");
    messageRef.current && (messageRef.current.value = "");
  };
  return (
    <div id="contact">
      <form onSubmit={sendMessage} action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name"
          ref={nameRef}
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Enter Subject"
          ref={subjectRef}
        />
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter Email"
          ref={emailRef}
        />
        <textarea
          name="message"
          id="message"
          cols={25}
          rows={7}
          required
          placeholder="Enter Message..."
          ref={messageRef}
        ></textarea>
        <Button type="submit">send message</Button>
      </form>
    </div>
  );
};

export default Contact;
