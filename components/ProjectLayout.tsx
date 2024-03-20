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
  details: React.ReactNode;
  // lessonsLearned?: string;
  // resources?: string;
  // link?: string;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  name,
  color,
  description,
  role,
  details,
}) => {
  return (
    <>
      <header className={`bg-${color} text-onProject h-64`}>
      <div className="container mx-auto flex items-center h-full"> 
        <div className="flex items-center h-full">
          <h1 className={`${quicksand.className} text-7xl font-bold`}>
            {name}
          </h1>
        </div>
        </div>
      </header>
      <div className="container mx-auto"> 
        <div className="mt-[-45px] my-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div className="col-span-2">
            <Card text={description} />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 h-f">
            <Card
              richContent={[
                  <div key="roles" className="flex flex-col justify-center h-full">
                    {role.map((role, index) => (
                      <span key={index}>
                        {role}
                      </span>
                    ))}
                  </div>
              ]}
            />
          </div>
        </div>
      <div className="my-4 flex flex-col gap-2">
            <Card
              title="Project Details"
              richContent={details}
            />
            <Card
              title="Lessons Learned and Reflections"
              richContent={[
                  <div key="details" className="flex flex-col h-full">
                    <span>Lessons Learned: Share the main lessons you learned during the project.</span>
                    <span>Design Reflections: Discuss your thoughts on the final design and how it could be improved.</span>
                    <span>Management Reflections: Discuss your thoughts on the project management and how it could be improved.</span>
                  </div>
              ]}/>




        </div>

        <div className="mt-auto w-full">
            <Button buttonText="View Other Projects" buttonLink="../" />
        </div>
      </div>
    </>
  );
};

export default ProjectLayout;
