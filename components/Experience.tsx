import React from "react";

const Experience: React.FC<{}> = () => {
  const experiences = [
    {
      id: 1,
      position: "Software Programmer",
      duration: "Jan 2023 - Present",
      location: "Bekasi, Indonesia",
      descriptions: [
        <>Developed <strong>Full-Stack</strong> industrial software solutions for major clients in the gas, cosmetics, and manufacturing sectors, handling technology from <strong>Embedded Systems (Arduino, C++, ESP32)</strong> to <strong>Back-End APIs (Go, PHP)</strong> and <strong>Front-End Applications (Vue.js, JavaScript)</strong>.</>,
        <>Engineered systems that bridge the physical and digital worlds, including <strong>PLC integration</strong>, <strong>Real-Time Data Monitoring (Centrifugo)</strong>, <strong>IoT Device Control (MQTT)</strong>, and <strong>RFID</strong>.</>,
        <>Built applications critical to manufacturing operations, including <strong>Overall Equipment Effectiveness (OEE)</strong>, <strong>Waste Management</strong>, <strong>Batch Reporting</strong>, and <strong>Production Quality Control</strong> systems.</>,
        <>Provided essential <strong>After-Sales support</strong>, taking ownership of complex technical issues to ensure continuous operation and <strong>Maximum Customer Satisfaction</strong>.</>,
        <>Actively expanding my skill set into <strong>Web3 and Blockchain development</strong>, investing time to master the fundamentals of <strong>Smart Contracts</strong> and the principles of <strong>Decentralized Systems</strong>.</>
      ]
    },
    {
      id: 2,
      position: "Electrical Maintenance",
      duration: "Nov 2022 - Dec 2022",
      location: "Bogor, Indonesia",
      descriptions: [
        <>Executed the <strong>Reverse-Engineering</strong> of electrical control panels by analyzing wiring and components, starting the reconstruction of schematic diagrams from <strong>torn-apart documentation</strong>.</>,
        <>Performed <strong>routine Preventive Maintenance</strong> on electrical systems to ensure <strong>Operational Reliability and Safety</strong>.</>
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        EXPERIENCE
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        WORK
      </p>
      
      <div className="container mx-auto 2xl px-4 max-w-4xl">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group">
              <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2A2A2A] hover:border-purple-600 transition-all duration-300 hover:scale-[1.02]">
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-white font-semibold text-2xl mb-2 md:mb-0">
                    {exp.position}
                  </h3>
                  <div className="text-right">
                    <p className="text-gray-300 text-sm md:text-base">{exp.duration}</p>
                    <p className="text-gray-400 text-xs md:text-sm">{exp.location}</p>
                  </div>
                </div>

                <ul className="text-gray-300 leading-relaxed space-y-2">
                  {exp.descriptions.map((desc, idx) => (
                    <li key={idx} className="flex">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-justify">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 w-20 h-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;