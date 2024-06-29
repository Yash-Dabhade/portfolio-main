// @flow strict

import * as React from "react";
import GlowCard from "../../helper/glow-card";
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link";

function ProjectCard({ project }) {
  return (
    <div>
      <GlowCard key={project.id * 100} identifier={`project-${project.id}`}>
        <div
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-[250px]  from-[#0d1224] border-[#1b2c68a0] rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full"
        ></div>
      </GlowCard>
      <div className="w-full my-6  h-[20px] flex justify-between items-center">
        <div className="font-bold text-white font-mono text-xl">
          {project.name}
        </div>
        <div>
          <Link target="_blank" href={project.code}>
            <IoLogoGithub
              className="bg-[#8b98a5] p-1 rounded-full hover:bg-[#f7f7f7] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={38}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
