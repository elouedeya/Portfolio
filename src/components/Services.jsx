import { FaMobileAlt } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { BiDesktop } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";

function Services() {
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26] relative  " id="services">
      <div className="container px-3 pt-20 mx-auto">
        <div className="lg:flex items-center justify-between gap-x-40">
          <span className="lg:w-1/2">
            <p className="text-[#c0d6bb] lg:text-2xl text-xl pb-4 uppercase ">
              Services
            </p>
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Building a website is not just about designing it.
            </h1>
          </span>
          <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-r-none border border-r-0 border-[#4c613e] opacity-40 lg:static absolute top-0 right-0"></div>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 gap-8 ">
          <div className="pt-8 px-6 pb-12 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <SiMaterialdesignicons className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl  mb-">UI/UX Design</h1>
            <p className="text-[#93a98b] mb-6  ">
              We create user interfaces that are intuitive, easy to use and
              visually appealing.
            </p>
          </div>

          <div className="pt-8 px-6 pb-12 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <BiDesktop className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl  mb-">Web Developmenet</h1>
            <p className="text-[#93a98b] mb-6  ">
              Building responsive websites using the latest technologies such as
              HTML5, CSS3, JavaScript, ReactJS
            </p>
          </div>

          <div className="pt-8 px-6 pb-12 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <TbBrandVscode className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl  mb-">App Developmenet</h1>
            <p className="text-[#93a98b] mb-6  ">
              We create user interfaces that are intuitive, easy to use and
              visually appealing.
            </p>
          </div>

          <div className="pt-8 px-6 pb-12 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <FaMobileAlt className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl  mb-">UI/UX Design</h1>
            <p className="text-[#93a98b] mb-6  ">
              We create user interfaces that are intuitive, easy to use and
              visually appealing.
            </p>
          </div>
        </section>

        <section className="lg:flex w-full items-end gap-20 mt-12 ">
          <div className="sm:w-[30rem] w-4/5 lg:mx-0 mx-auto  rounded-[560px] rounded-b-none border border-b-0 border-l-0  border-[#69835e] relative z-20 ">
            <img
              className="relative w-full -mt-8  -left-8 z-20"
              src="/assets/eya.png"
              alt=""
            />
          </div>

          <div className="lg:w-1/2 lg:mt-0 mt-12">
                <p className="text-[#c0d6bb] lg:text-2xl text-xl pb-4 uppercase" >
                    Statistic
                </p>
                <div className="w-full lg:flex justify-between gap-8 lg:pt-24 ">
                        <span className="text-center">
                            <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                                200+
                            </p>
                            <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                                    Project Delivered  
                            </p>
                        </span>
                        <span className="text-center">
                            <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                                200+
                            </p>
                            <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                                    Project Delivered  
                            </p>
                        </span>
                        <span className="text-center">
                            <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                                2+
                            </p>
                            <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                                    Years of Experience
                            </p>
                        </span>
                        <span className="text-center">
                            <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                                200+
                            </p>
                            <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">
                                    Project Delivered  
                            </p>
                        </span>
                </div>
                <div className="flex lg:justify-between justify-start lg:gap-0 gap-[50%] pt-12 xl:pl-[20%] lg:h-auto h-44">
                  <div className="lg:w-60 w-28 lg:h-40 rounded-[560px] rounded-b-none border border-b-0 border-[#4c613e] opacity-40"> 

                  </div>
                  <div className="lg:w-40 w-32 lg:h-20 h-16 lg:p-8 p-6 rounded-full rounded-b-none  bg-[#3f5125] ">
                  <button className="rounded-full bg-[#ff8267] text-[#762f20] lg:h-24 h-20 lg:w-24 w-20 p-4 relative  transition ease-out duration-300 transform hover:scale-125">
              <p className="lg:text-2xl text-xl font-medium uppercase">
                Let's talk
              </p>
              <img
                className="lg:w-full w-1/2 h-12 absolute lg:-left-20 -left-8 top-[25%]"
                src="/assets/arrow-right.png"
                alt=""
              />
            </button>
                  </div>
              
                </div>
          </div>

        </section>
        
      </div>
    </div>
  );
}

export default Services;
