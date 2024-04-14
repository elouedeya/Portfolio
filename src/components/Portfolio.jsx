function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]" id="portfolio">
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
            <img src="/assets/img1.png" alt="" />
          </div>
          <div className="flex flex-col gap-6 ">
            <img src="/assets/img2.png" alt="" />
            <img src="/assets/img3.jpg" alt="" />
          </div>

          <img src="/assets/img4.png" alt="" />
          <img src="/assets/img5.jpg" alt="" />
          <img src="/assets/img6.jpg" alt="" />
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
