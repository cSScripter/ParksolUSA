"use client";
import { useState, useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [state, handleSubmit] = useForm("xandqyjv"); // your FormSpree form ID
  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Moved success handling into useEffect
  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
      formRef.current?.reset();

      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer); // cleanup timeout if component unmounts
    }
  }, [state.succeeded]);

  return (
    <section className="flex flex-col items-center justify-center pt-10 md:pb-20 md:gap-5 md:pt-24 px-5">
      <div className="w-full max-w-[1000px] ">
        <h2 className="!font-bold text-center !text-[22px] lg:!text-[28px]">
          We would love to hear from you! To request a quote, inquire about
          availability, or for more information, please fill out the form below.
        </h2>
      </div>
      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 md:gap-10 m-10"
      >
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="flex-1 border-b-2 border-black p-1 focus:outline-none"
            required
          />
          <ValidationError prefix="First Name" field="firstName" errors={state.errors} />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="flex-1 border-b-2 border-black p-1 focus:outline-none"
            required
          />
          <ValidationError prefix="Last Name" field="lastName" errors={state.errors} />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border-b-2 border-black p-1 focus:outline-none"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          placeholder="Write a message"
          rows={5}
          className="w-full border-b-2 border-black p-1 focus:outline-none h-30"
          required
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button
          type="submit"
          disabled={state.submitting}
          className="w-max px-6 py-2 border bg-black text-white rounded-full"
        >
          Submit
        </button>

        <p
          className={`!font-bold text-center transition-opacity duration-1000 ${
            submitted ? "opacity-100" : "opacity-0"
          }`}
        >
          MESSAGE SENT
        </p>
      </form>
    </section>
  );
}
