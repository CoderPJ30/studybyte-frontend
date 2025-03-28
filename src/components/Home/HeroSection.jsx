import React from "react";

const HeroSection = () => {
  return (
    <section className="mt-9 max-w-[1356px] max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-wrap md:flex-nowrap gap-10 items-center p-16 rounded-2xl bg-neutral-700 leading-6 max-md:px-5 ">
        <article className="w-[71%] max-md:ml-0 max-md:w-full">
          <div className="self-stretch my-auto min-h-[351px] min-w-[300px] w-[484px]">
            <header className="w-full leading-tight max-md:max-w-full">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 max-md:max-w-full">
                Welcome to StudyByte!
              </h2>
              <p className="mt-2 text-xl text-zinc-100 max-md:max-w-full">
                It's a digital library for students and teachers.
              </p>
            </header>
            <p className="mt-6 w-full text-base text-zinc-100 max-md:max-w-full">
              Our digital library is a modern digital repository designed to
              make learning more accessible, efficient, and secure. With
              AI-powered recommendations, you can easily discover books and
              articles tailored to your preferences, while advanced search
              filters help you quickly find exactly what you need.
            </p>
            <p className="mt-6 w-full text-base text-zinc-100 max-md:max-w-full">
              Whether you're a student, educator, or researcher, StudentByte
              provides multilingual support. Join us in shaping the future of
              education and contributing to India's vision of Viksit Bharat
              2047 through universal access to knowledge.
            </p>
          </div>
        </article>
        <aside className="ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7fd4059a44ad756b20e87e6971af7830ed5c9ce3a49839083b168f0b9c638f9?placeholderIfAbsent=true&apiKey=2de4a0ed8a394998a15e1196bab5e726"
            alt="Library illustration"
            className="object-contain w-full aspect-[1.50] max-md:mt-10 max-md:max-w-full"
          />
        </aside>
      </div>
    </section>
  );
};

export default HeroSection;