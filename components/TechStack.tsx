import React from "react";
import Image from "next/image";

const TechStack: React.FC<{}> = () => {
  const techCategories = {
    backend: [
      { name: "Node.js", icon: "/tech-icon/nodejs.svg" },
      { name: "Express", icon: "/tech-icon/express.svg" },
      { name: "PHP", icon: "/tech-icon/php.svg" },
      { name: "CodeIgniter", icon: "/tech-icon/codeigniter.svg" },
      { name: "Apache", icon: "/tech-icon/apache.svg" },
      { name: "Nginx", icon: "/tech-icon/nginx.svg" },
    ],
    frontend: [
      { name: "React", icon: "/tech-icon/react.svg" },
      { name: "Next.js", icon: "/tech-icon/nextjs.svg" },
      { name: "Vue.js", icon: "/tech-icon/vuejs.svg" },
      { name: "Vite", icon: "/tech-icon/vitejs.svg" },
      { name: "JavaScript", icon: "/tech-icon/javascript.svg" },
      { name: "TypeScript", icon: "/tech-icon/typescript.svg" },
      { name: "Web3.js", icon: "/tech-icon/web3js.svg" },
    ],
    mobile: [
      { name: "Flutter", icon: "/tech-icon/flutter.svg" },
      { name: "Dart", icon: "/tech-icon/dartlang.svg" },
    ],
    databases: [
      { name: "MySQL", icon: "/tech-icon/mysql.svg" },
      { name: "SQL Server", icon: "/tech-icon/microsoftsqlserver.svg" },
      { name: "DBeaver", icon: "/tech-icon/dbeaver.svg" },
    ],
    programming: [
      { name: "Ethereum", icon: "/tech-icon/ethereum.svg" },
      { name: "Solidity", icon: "/tech-icon/solidity.svg" },
      { name: "Python", icon: "/tech-icon/python.svg" },
      { name: "C++", icon: "/tech-icon/c++.svg" },
      { name: "C", icon: "/tech-icon/c.svg" },
      { name: "Go", icon: "/tech-icon/go.svg" },
      { name: "Rust", icon: "/tech-icon/rust.svg" }      
    ],
    devops: [
      { name: "Git", icon: "/tech-icon/git.svg" },
      { name: "GitLab", icon: "/tech-icon/gitlab.svg" },
      { name: "Ubuntu", icon: "/tech-icon/ubuntu.svg" },
      { name: "Bash", icon: "/tech-icon/bash.svg" },
      { name: "Postman", icon: "/tech-icon/postman.svg" },
    ],
    tools: [
      { name: "IntelliJ", icon: "/tech-icon/intellij.svg" },
      { name: "Vim", icon: "/tech-icon/vim.svg" },
      { name: "Arduino", icon: "/tech-icon/arduino.svg" },
      { name: "MQTT", icon: "/tech-icon/mqtt.svg" },
      { name: "Centrifugo", icon: "/tech-icon/centrifugo.svg" },
    ]
  };

  const allTechnologies = [
    ...techCategories.backend,
    ...techCategories.frontend,
    ...techCategories.mobile,
    ...techCategories.databases,
    ...techCategories.programming,
    ...techCategories.devops,
    ...techCategories.tools
  ];

  return (
    <section id="tech-stack">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        TECH STACKS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        TECHNOLOGIES I'VE EXPERIENCED WITH
      </p>
        
      <div className=" container mx-auto 2xl  ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allTechnologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-[#1E1E1E] rounded-md items-center group p-0 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="hover:opacity-80 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
