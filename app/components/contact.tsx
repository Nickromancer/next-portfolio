import Forms from "@/app/components/forms";

export default function Contact() {
  return (
    <>
      <div className="bg-white" id="Contact">
        <h1 className="font-semibold text-4xl py-3 md:px-40 px-4 bg-beige text-black">
          Contact
        </h1>
      </div>
      <div
        className="pt-2 pb-14 text-black relative md:px-40 px-4 bg-beige"
        id="contact"
      >
        <p className=" text-md font-extralight mb-2 text-black">
          Get in touch or send me an email directly on
          Nicholas.Hansen101@gmail.com
        </p>
        <Forms></Forms>
      </div>
      <div className="text-black bg-orange w-full flex justify-center">
        <p className="py-2">
          This website is made with Next.js and maintained by Nicholas Hansen!
        </p>
      </div>
    </>
  );
}
