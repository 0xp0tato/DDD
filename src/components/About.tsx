import React from "react";

const videoUrl =
  "https://res.cloudinary.com/dqjxjr41e/video/upload/v1705331373/Dehraduna%20Dumplings/homepage-video.mp4";

const About = () => {
  return (
    <main className="bg-primary-color py-20 px-20">
      <div className="grid grid-cols-2 gap-10 text-white h-full lg:max-w-[1140px] mx-auto">
        <section>
          <h1 className="text-5xl font-bold font-forte">About Us</h1>
          <p className="text-xl mt-8 tracking-wider leading-7">
            {`"DehraDuna Dumplings" originated when our unique flavors travelled
            all the way from the green valley in the foothills of Himalayas,
            Dehradun (India) to the historic Duna river in Budapest.`}
          </p>
          <h2 className="text-3xl mt-8 font-montserrat">
            WHERE DO DUMPLINGS COME FROM?
          </h2>
          <p className="text-xl mt-5 tracking-wider leading-7">
            Fun fact, dumpling is actually an umbrella term, hiding a broad
            class of dishes from all around the world under its name, like the
            Ghanaian banku, the Spanish empanadas, the Polish pierogi, the
            Georgian khinkali, the Chinese bao, and so on... In fact, the
            Hungarian nokedli can be considered as a type of dumpling! :) What
            we serve are called Momos, a subtype of steamed dumplings with
            various meat and plant-based fillings, originally from the Tibetan
            and Nepali cuisine, also popular in the neighbouring India.
          </p>
          <h2 className="text-4xl mt-8">WHAT WE OFFER</h2>
          <p className="text-xl mt-5 tracking-wider leading-7">
            {`Our touch comes from combining the best of all for everyone: Veggie
            momos for our vegan customers, Paneer for the vegetarians, Chicken
            and Pork for the protein lovers, and a wide selection of dip sauces,
            along with our beloved Indian Fire for the adventurous, who need a
            bit of spice in life. To make it special, we extensively offer
            different styles of momos: steam, pan fried, and, deep fried. We
            offer a unique blend of flavors in our gravy momos for those who eat
            life with a big spoon.`}
          </p>
        </section>
        <section>
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            className="object-cover rounded-2xl"
          />
        </section>
      </div>
    </main>
  );
};

export default About;
