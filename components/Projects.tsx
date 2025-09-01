import Image from "next/image";
import React from "react";

const Projects: React.FC<{}> = () => {
  const projects = [
    {
      id: 1,
      title: "Barcode Gas System",
      image: "/projects/barcode.png",
      alt: "Barcode Gas System",
      description: "Create Production, Quality Control, and Maintenance Android Applications for Industrial Gas Company.",
      technologies: [
        { name: "PHP", icon: "/tech-icon/php.svg" },
        { name: "Code Igniter", icon: "/tech-icon/codeigniter.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },       
        { name: "MsSQL", icon: "/tech-icon/microsoftsqlserver.svg" }
      ],
    },
    {
      id: 2,      
      title: "Overall Equipment Effectiveness",
      image: "/projects/oee.png",
      alt: "Overall Equipment Effectiveness",
      description: "Building a web application to track and improve Overall Effectiveness Equipment (OEE) for better operational efficiency.",
      technologies: [
        { name: "Go", icon: "/tech-icon/go.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },
        { name: "Vue.js", icon: "/tech-icon/vuejs.svg" },  
        { name: "MsSQL", icon: "/tech-icon/microsoftsqlserver.svg" },
        { name: "Centrifugo", icon: "/tech-icon/centrifugo.svg" }
      ],
    },
    {
      id: 3,
      title: "Wireless Button Control",
      image: "/projects/panel-button.png",
      alt: "Wireless Button Control",
      description: "Developing a custom wireless button with ESP32, integrated into existing systems to enhance usability and improve operational workflow.",
      technologies: [
        { name: "C++", icon: "/tech-icon/c++.svg" },
        { name: "Arduino", icon: "/tech-icon/arduino.svg" },
        { name: "MQTT", icon: "/tech-icon/mqtt.svg" }
      ],
    },
    {
      id: 4,
      title: "PLC Data Monitoring & Reporting",
      image: "/projects/batch.png",
      alt: "PLC Data Monitoring & Reporting",
      description: "Built a web system to read PLC data, calculate machine performance, store to database, and display real-time data with interactive reports.",
      technologies: [
        { name: "Go", icon: "/tech-icon/go.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },
        { name: "Vue.js", icon: "/tech-icon/vuejs.svg" },        
        { name: "MsSQL", icon: "/tech-icon/microsoftsqlserver.svg" }
      ],
    },
    {
      id: 5,
      title: "Process Performance",
      image: "/projects/cosmetics.png",
      alt: "Process Performance",
      description: "Enhanced Process Performance Indicator System of one of leading Cosmetic Company.",
      technologies: [
        { name: "PHP", icon: "/tech-icon/php.svg" },
        { name: "Code Igniter", icon: "/tech-icon/codeigniter.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },       
        { name: "MsSQL", icon: "/tech-icon/microsoftsqlserver.svg" }
      ],
    },
    {
      id: 6,
      title: "Waste Management System",
      image: "/projects/waste.png",
      alt: "Waste Management System",
      description: "Developing Waste Management System of one of leading Cosmetic Company.",
      technologies: [
        { name: "Go", icon: "/tech-icon/go.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },
        { name: "Vue.js", icon: "/tech-icon/vuejs.svg" },        
        { name: "MsSQL", icon: "/tech-icon/microsoftsqlserver.svg" }
      ],
    },
    {
      id: 7,
      title: "PLC Integrator",
      image: "/projects/pat.png",
      alt: "PLC Integrator",
      description: "Integrate MicroNIR App and Siemens S7-300 PLC into one App.",
      technologies: [
        { name: "Go", icon: "/tech-icon/go.svg" },
        { name: "Javascript", icon: "/tech-icon/javascript.svg" },
        { name: "Vue.js", icon: "/tech-icon/vuejs.svg" }
      ],
    },
    {
      id: 8,
      title: "UHF RFID PPE Tracking System",
      image: "/projects/rfid.png",
      alt: "UHF RFID PPE Tracking System",
      description: "Developed a final project using UHF RFID to track personal protective equipment of workers.",
      technologies: [
        { name: "C++", icon: "/tech-icon/c++.svg" },
        { name: "Arduino", icon: "/tech-icon/arduino.svg" }
      ],     
    },
    {
      id: 9,
      title: "Arduino-Based IC Tester",
      image: "/projects/logic-gate.png",
      alt: "Arduino-Based IC Tester",
      description: "Developed a digital logic gate tester with Arduino to verify ICs for AND, OR, NAND, and NOR functionality",
      technologies: [
        { name: "C++", icon: "/tech-icon/c++.svg" },
        { name: "Arduino", icon: "/tech-icon/arduino.svg" }
      ],
    }
  ];

  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h2>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        CONTRIBUTIONS
      </p>
      <div className="container mx-auto 2xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <div className={`bg-[#1E1E1E] rounded-lg overflow-hidden`}>
      <div className="flex flex-col md:flex-row">
        <div className="relative w-full md:w-40 h-40 flex-shrink-0 bg-white">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-contain p-4"
            style={{ background: 'white' }}
          />
        </div>
        <div className="p-4 flex-1">
          <p className="text-white font-semibold text-xl mb-2">
            {project.title}
          </p>
          <p className="text-gray-400 text-sm mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech: any, index: number) => (
              <div key={index} className="tech-icon" title={tech.name}>
                <Image 
                  src={tech.icon} 
                  alt={tech.name} 
                  width={20} 
                  height={20} 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
    