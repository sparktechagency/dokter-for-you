
// import SubscribePng from '@/public/subscribe.svg'; 

const Subscribe = () => {

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

                                    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                                          <input
                                                type="email"
                                              
                                                placeholder="Enter your email"
                                                className="w-full md:max-w-xs py-3 md:py-4 bg-[#E9E9E9] px-6 md:px-8  border-none focus:outline-none"
                                          />

                                          <button
                                            
                                                className="px-6 w-full md:w-[130px] h-[54px] bg-[#11D279] font-[500] text-white"
                                                
                                          >
                                                Subscribe
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Subscribe;