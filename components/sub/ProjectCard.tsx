import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return <div className="relative overflow-hidden rounded-3xl shadow-lg border border-[#2A0E61]">
    <Image 
    src={src}
    alt={title}
    width={1000}
    height={1000}
    className="w-full object-contain rounded-3xl"
    />
    <div className="relative p-5">
        <h1 className="text-2xl font-semibold text-white p-5 mb-3">{title}</h1>
        <p className="mt-2 font-normal text-gray-300 mb-3">{description}</p>

    </div>
  </div>;
};

export default ProjectCard;
