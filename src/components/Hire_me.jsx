import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string()
    .min(5, "Message must be at least 5 characters")
    .required("Message is required"),
});

const Hire_me = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio", "template_jdlp244", form.current, {
        publicKey: "Hcs60HmzfKoh2sRJU",
      })
      .then(
        () => {
          alert("SUCESS");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26] h-full relative "
      id="hire"
    >
      <div className="px-3 pt-20 lg:flex items-end justify-between gap-8 container mx-auto">
        <div className="lg:w-2/3 ">
          <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase ">
            Hire me
          </p>
          <span className="flex pb-8 pt-4">
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl ">
              Stay Chill and Tell <br /> Your Plane{" "}
            </h1>
          </span>

          <div className="lg:hidden  block mx-auto sm:w-[30rem] w-4/5 rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e] ">
            <img
              src="/assets/eya.png"
              alt=""
              className="h-[106%] -mt-8 w-full"
            />
          </div>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form
                ref={form}
                className="lg:w-11/12 flex flex-col lg:gap-6 gap-3 text-white lg:mt-0 mt-12"
                onSubmit={sendEmail}
              >
                <div className="flex lg:gap-6 gap-3 w-full ">
                  <label htmlFor="name" className="w-full ">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="bg-[#213516] w-full px-4 h-16 outline-none "
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </label>
                  <label htmlFor="email" className="w-full ">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-[#213516] w-full px-4 h-16 outline-none "
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </label>
                </div>
                <label htmlFor="message" className="w-full ">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message..."
                    className="bg-[#213516] w-full px-4 h-140 outline-none max-h-[120px] "
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </label>
                <div className="pt-4 flex justify-end h-40">
                  <div className="bg-gradient-to-b from-[#3f5125] to-[#364823] rounded-full rounded-b-none lg:w-40 w-32 lg:h-20 h-16 lg:p-8 p-6 ">
                    <button
                      type="submit"
                      className="rounded-full bg-[#ff8267] text-[#762f20] lg:h-24 h-20 lg:w-24 w-20 p-4 relative transition ease-out duration-300 transform hover:scale-125"
                      disabled={isSubmitting}
                    >
                      <p className="lg:text-2xl text-lg font-medium">Send</p>
                      <img
                        src="/assets/arrow-right.png"
                        alt=""
                        className=" lg:w-full w-1/2 h-12 absolute lg:-left-20 -left-8 top-[25%]  "
                      />
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="lg:w-40 w-20 lg:h-32 h-20 rounded-top-[560px] rounded-t border-[#4c613e] absolute left-0 bottom-0"></div>
        <div className="lg:block hidden xl:w-[30rem] lg:w-[35%] h-[70%] rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e] absolute right-0 ">
          <img src="/assets/eya.png" alt="" className="h-[106%] -mt-8 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hire_me;
