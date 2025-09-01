import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          INTRODUCTION
        </p>
        <p className="text-[18px] text-gray-300 text-justify ">
          I am a <strong>Full-Stack Software Engineer</strong> with a proven track record of <strong>building and integrating hardware and software systems</strong> for industrial applications. My experience spans from developing <strong>embedded firmware for devices like the ESP32 and Arduino</strong> to designing <strong>full-stack web platforms for real-time data monitoring, PLC integration, and operational efficiency</strong>. Working as a vendor, I have also gained valuable hands-on experience in <strong>after-sales support</strong>, directly ensuring client satisfaction and successfully resolving technical challenges.
          <br />
          <br />
          I am now bringing the skills learned from this <strong>hands-on, client-facing engineering environment</strong> to the world of <strong>blockchain development</strong>, driven by a deep fascination with the architecture of <strong>decentralized applications, smart contracts, and the protocols</strong> that power them. I believe my background in creating <strong>practical, industrial-grade solutions</strong> provides a strong foundation for contributing to the decentralized web.
          <br />
          <br />
          I am seeking a <strong>collaborative environment</strong> where I can <strong>learn from experts and contribute</strong> to meaningful projects. My goal is to help build the <strong>foundational layers of a more open and transparent internet</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;


