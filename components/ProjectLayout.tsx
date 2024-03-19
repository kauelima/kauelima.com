// src/app/components/ProjectLayout.tsx
import React from "react";
import { Quicksand } from "next/font/google";
import Card from "./Card";
import Button from "./Button";

const quicksand = Quicksand({ weight: ["700"], subsets: ["latin"] });

interface ProjectLayoutProps {
  name: string;
  color?: string;
  description: string;
  role: string[];
  // image?: string;
  // details?: string;
  // lessonsLearned?: string;
  // resources?: string;
  // link?: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  color,
  description,
  role,
}) => {
  return (
    <>
      <header className={`bg-${color} text-onProject h-64`}>
      <div className="container mx-auto px-3 flex items-center h-full"> 
        <div className="px-3 md:px-6 lg:px-12 flex items-center h-full">
          <h1 className={`${quicksand.className} text-7xl font-bold`}>
            {name}
          </h1>
        </div>
        </div>
      </header>
      <div className="container mx-auto px-3"> 
      <div className="px-3 md:px-6 lg:pxs-12 my-4">
        <div className="mt-[-45px] mb-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="col-span-2">
            <Card text={description} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 h-f">
            <Card
              richContent={[
                  <div key="roles" className="flex flex-col">
                    {role.map((role, index) => (
                      <span key={index} className="inline-flex gap-2">
                        {role}
                      </span>
                    ))}
                  </div>
              ]}
            />
          </div>
        </div>
        <div className="mt-auto">
            <Button buttonText="View Other Projects" buttonLink="../" />
        </div>
      </div>
      </div>
    </>
  );
};

export default ProjectLayout;
