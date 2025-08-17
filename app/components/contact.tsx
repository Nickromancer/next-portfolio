import Forms from "@/app/components/forms";

export default function Contact() {
  return (
    <>
      <h1 className="font-semibold text-4xl py-3 px-40 bg-orange text-white">Contact</h1>
      <div
        className="pt-2 pb-14  text-white bg-orange relative px-40"
        id="contact"
      >
        <p className=" text-md font-extralight mb-2">
          Get in touch or send me an email directly on
          Nicholas.Hansen101@gmail.com
        </p>
        <Forms></Forms>
      </div>
    </>
  );
}
