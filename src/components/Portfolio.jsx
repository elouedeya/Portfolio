function Portfolio() {
  return (
    <div
      className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]"
      id="portfolio"
    >
      <div className="container p-3 mx-auto pt-20 ">
        <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase text-center">
          Portfolio
        </p>
        <span className="flex justify-center pb-20 pt-8">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:text-5xl text-2xl ">
            Selected works
          </h1>
        </span>
        <section className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-16">
          <div className="md:col-span-2 ">
            <img src="/assets/LOGIN.PNG" alt="image1" />
          </div>
          <div className="flex flex-col gap-6 ">
            <img src="/assets/arames4.png" alt="" />
            <img src="/assets/arames2.png" alt="" />
          </div>

          <img src="/assets/arames.png" alt="" />
          <img src="/assets/arames3.png" alt="" />
          <img src="/assets/arames5.png" alt="" />

          <img src="/assets/aicons1.PNG" alt="" />

          <img src="/assets/aicons2.PNG" alt="" />
          <img src="/assets/aicons3.PNG" alt="" />
          <img src="/assets/aicons4.PNG" alt="" />
          <div className="md:col-span-2 ">
          <img src="/assets/project4.PNG" alt="1" />
          </div>
          <div className="md:col-span-2 ">
          <img src="/assets/project3.PNG" alt="1" />
          </div>
         
          <div className="flex flex-col gap-6 ">
          <img src="/assets/project2.PNG" alt="2" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
