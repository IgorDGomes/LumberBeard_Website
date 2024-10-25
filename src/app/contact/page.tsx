"use client";

import Image from "next/image";
import { logo } from "../../helper/images";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    fullName: z.string(),
    email: z.string().email(),
    subject: z.string(),
    message: z
      .string()
      .trim()
      .min(20, { message: "Must be 20 or more characters long" }),
  })
  .required();

type Schema = z.infer<typeof formSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(formSchema),
  });

  return (
    <div className="contact-bg pt-32 pb-52 flex flex-col items-center text-center gap-12 text-cream-100">
      <div className="flex items-center gap-2.5">
        <Image src={logo} alt="logo" className="size-16 md:size-[5.5rem]" />
        <h1 className="font-semibold text-3xl md:text-4xl">LumberBeard</h1>
      </div>
      <p className="max-w-[80%] xl:max-w-[1200px] text-2xl">
        At LumberBear, your satisfaction is our priority. Whether you have a
        question about our products, need help with an order, or just want to
        chat about beard grooming, we&apos;re here to help. Feel free to reach
        out by filling out the form below, and our team will get back to you
        within 24-48 hours.
      </p>
      <div className="w-[60%] max-w-[720px]">
        <h2 className="font-semibold text-4xl pb-14">
          We&apos;d love to hear from you!
        </h2>
        <form
          method="post"
          className="flex flex-col gap-10"
          onSubmit={handleSubmit((d: Schema) => console.log(d))}
        >
          <input
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
            className="h-16 bg-cream-300/50 rounded-2xl placeholder-cream-100/80 placeholder:text-2xl placeholder:font-semibold pl-6"
            required
          />
          <input
            {...register("email")}
            type="email"
            autoComplete="on"
            placeholder="Email"
            className="h-16 bg-cream-300/50 rounded-2xl placeholder-cream-100/80 placeholder:text-2xl placeholder:font-semibold pl-6"
            required
          />
          <input
            {...register("subject")}
            type="text"
            placeholder="Subject"
            className="h-16 bg-cream-300/50 rounded-2xl placeholder-cream-100/80 placeholder:text-2xl placeholder:font-semibold pl-6"
            required
          />
          <textarea
            {...register("message")}
            minLength={20}
            placeholder="Message"
            className="resize-none h-56 bg-cream-300/50 rounded-2xl placeholder-cream-100/80 placeholder:text-2xl placeholder:font-semibold pl-6 pt-3"
            required
          ></textarea>
          {errors.message && (
            <span className="text-red-500">{`${errors.message.message}`}</span>
          )}
          <button
            type="submit"
            className="bg-cream-100 px-16 py-4 rounded-2xl text-brown-600 h-16 max-w-56 mx-auto font-bold text-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
