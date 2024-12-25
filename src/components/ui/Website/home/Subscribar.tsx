import { useSubscribeByEmailMutation } from "@/redux/features/website/footerSlice";
import Swal from "sweetalert2";
import { useRef } from "react";

const Subscribe = () => {
      const [subscribeByEmail] = useSubscribeByEmailMutation();
      const emailInputRef = useRef<HTMLInputElement>(null); // Create a ref for the input field

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get("email") as string;
            const data = {
                  email: email
            };

            if (!email) {
                  console.error("Email is required");
                  return;
            }

            subscribeByEmail(data).then((res) => {
                  if (res?.data?.success) {
                        Swal.fire({
                              text: res?.data?.message,
                              icon: "success",
                              showConfirmButton: false,
                              timer: 1500,
                        });

                        if (emailInputRef.current) {
                              emailInputRef.current.value = ""; // Clear the input field
                        }
                  } else {
                        Swal.fire({
                              title: "Oops",
                              text: res?.data?.message,
                              icon: "error",
                              timer: 1500,
                              showConfirmButton: false,
                        });
                  }
            });
      };

      return (
            <div>
                  <div
                        className="bg-cover bg-center relative h-full md:max-h-[144px] py-8 px-2"
                        style={{ backgroundImage: `url("/subscribe.svg")` }}
                  >
                        <div className="relative z-10 mx-auto text-center">
                              <div className="container mx-auto text-center md:text-start grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                                    <div className="mb-4 md:mb-0">
                                          <h2 className="text-lg lg:text-[24px] font-semibold text-[#EEEEEE] mb-2 md:mb-4">
                                                Subscribe To Our Email Alerts
                                          </h2>

                                          <p className="text-sm md:text-[16px] text-[#E6E6E6] mb-4 md:mb-6">
                                                Subscribe and stay updated on the latest news & special deals!
                                          </p>
                                    </div>

                                    <form
                                          className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
                                          onSubmit={handleSubmit}
                                    >
                                          <input
                                                ref={emailInputRef} // Attach the ref to the input field
                                                type="email"
                                                name="email"
                                                placeholder="Enter your email"
                                                className="w-full md:max-w-xs py-3 md:py-4 bg-[#E9E9E9] px-6 md:px-8 border-none focus:outline-none"
                                          />

                                          <button
                                                type="submit"
                                                className="px-6 w-full md:w-[130px] h-[54px] bg-[#11D279] font-[500] text-white"
                                          >
                                                Subscribe
                                          </button>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Subscribe;
