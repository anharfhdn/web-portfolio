import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        CERTIFICATE
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        BOOTCAMP / ONLINE CLASS
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://udemy-certificate.s3.amazonaws.com/image/UC-83ea6a1f-68ff-4e96-a4b7-a5c9ea9fdfb7.jpg"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/certificate/golang-certificate.jpg"
                height={150}
                width={150}
                alt="Anhar Fahrudin - Go Certificate"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Go</p>
                <p className="text-gray-500 text-[10px]">
                  Covered fundamentals, concurrency, & backend development.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://www.udemy.com/certificate/UC-d941f092-9384-4681-b2ee-f10939a3ffd2/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/certificate/rust-certificate.jpg"
                height={150}
                width={150}
                alt="Anhar Fahrudin - Rust Certificate"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Rust</p>
                <p className="text-gray-500 text-[10px]">
                  Studied ownership, borrowing, & systems programming.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.udemy.com/certificate/UC-62d58f08-4f6d-448f-adb1-3cd2fe3ea043/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/certificate/dart-certificate.jpg"
                height={150}
                width={150}
                alt="Anhar Fahrudin - Dart Certificate"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Dart
                </p>
                <p className="text-gray-500 text-[10px]">
                  Learned syntax, async programming, & cross-platform apps.
                </p>
              </div>
            </div>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
