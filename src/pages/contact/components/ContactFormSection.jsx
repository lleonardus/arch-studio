import { useRef, useState } from "react";

export function ContactFormSection() {
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function isFormValid() {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (formData.name.trim() === "") {
      setErrors((errors) => ({ ...errors, name: "Can't be empty" }));
      nameInputRef.current?.focus();
      return false;
    } else if (formData.email.trim() === "") {
      setErrors((errors) => ({ ...errors, email: "Can't be empty" }));
      emailInputRef.current?.focus();
      return false;
    } else if (!emailRegex.test(formData.email)) {
      setErrors((errors) => ({
        ...errors,
        email: "Invalid Email",
      }));
      emailInputRef.current?.focus();
      return false;
    } else if (formData.message.trim() === "") {
      setErrors((errors) => ({ ...errors, message: "Can't be empty" }));
      messageInputRef.current?.focus();
      return false;
    }

    return true;
  }

  async function simulateFormSubmission() {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  }

  function resetFormData() {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid()) return;
    await simulateFormSubmission();
    resetFormData();
  }

  return (
    <section className="mt-[73px] px-8 tablet:mt-[199px] tablet:px-0 desktop:mt-[159px] desktop:flex desktop:gap-[30px]">
      <h2 className="max-w-[180px] text-[48px] font-bold leading-[52px] tracking-[-1.71px] text-gray-900 tablet:max-w-none tablet:text-xl">
        Connect with us
      </h2>
      <form
        className="relative mt-[42px] space-y-[43px] pb-20 tablet:mt-[60px] desktop:mt-0 desktop:w-full"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            name="name"
            placeholder="Name"
            type="text"
            disabled={isSubmitting}
            className={`${errors.name ? "border-red pr-[150px] placeholder:text-red/50" : "border-gray-900 pr-[34.5px] placeholder:text-gray-300"} w-full cursor-pointer border-b pb-[22px] pl-[34.5px] text-[20px] font-bold tracking-[-0.31px] focus:border-b-[3px] focus:outline-none disabled:cursor-not-allowed`}
            ref={nameInputRef}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors((errors) => ({ ...errors, name: "" }));
            }}
          />
          {errors.name && (
            <p className="absolute bottom-4 right-4 text-[18px] font-bold tracking-[-0.28px] text-red">
              {errors.name}
            </p>
          )}
        </div>
        <div className="relative">
          <input
            name="email"
            placeholder="Email"
            type="text"
            disabled={isSubmitting}
            className={`${errors.email ? "border-red pr-[150px] placeholder:text-red/50" : "border-gray-900 pr-[34.5px] placeholder:text-gray-300 disabled:cursor-not-allowed"} w-full cursor-pointer border-b pb-[22px] pl-[34.5px] text-[20px] font-bold tracking-[-0.31px] focus:border-b-[3px] focus:outline-none`}
            ref={emailInputRef}
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setErrors((errors) => ({ ...errors, email: "" }));
            }}
          />
          {errors.email && (
            <p className="absolute bottom-4 right-4 text-[18px] font-bold tracking-[-0.28px] text-red">
              {errors.email}
            </p>
          )}
        </div>
        <div className="relative flex">
          <textarea
            name="message"
            placeholder="Message"
            type="text"
            disabled={isSubmitting}
            className={`${errors.message ? "border-red pr-[150px] placeholder:text-red/50" : "border-gray-900 pr-[34.5px] placeholder:text-gray-300"} w-full cursor-pointer border-b pb-[22px] pl-[34.5px] text-[20px] font-bold tracking-[-0.31px] focus:border-b-[3px] focus:outline-none disabled:cursor-not-allowed`}
            ref={messageInputRef}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              setErrors((errors) => ({ ...errors, message: "" }));
            }}
          ></textarea>
          {errors.message && (
            <p className="absolute bottom-4 right-4 text-[18px] font-bold tracking-[-0.28px] text-red">
              {errors.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute bottom-0 right-0 grid h-20 w-20 place-items-center bg-gray-900 transition-colors hover:bg-gray-700 disabled:cursor-progress disabled:bg-gray-300"
        >
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20">
              <g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2">
                <path d="M15 1l9 9-9 9M0 10h24" />
              </g>
            </svg>
          </span>
        </button>
      </form>
    </section>
  );
}
