// src/app/components/ProjectLayout.tsx
import Image from 'next/image';

interface ProjectLayoutProps {
  name: string;
  description: string;
  image: string;
  role: string[];
  lessonsLearned?: string; 
  link?: string; 
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ name, description, image, role, lessonsLearned, link }) => {

  return (
    <div className="container mx-auto px-4 py-8"> 
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h1 className="text-3xl font-bold text-onBackground">{name}</h1>
          <div className="mt-3">
            <h2 className="text-lg font-semibold text-onBackground">My Role</h2>
            <ul className="list-disc ml-6"> 
              {role.map((item) => (
                  <li key={item} className="text-onBackground">{item}</li>
              ))}
            </ul>
          </div>
          {lessonsLearned && (
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-onBackground">Lessons Learned</h2>
              <p className="text-onBackground">{lessonsLearned}</p>
            </div>
          )}
          {link && (
            <a 
               href={link}
               target="_blank" 
               rel="noopener noreferrer" 
               className="mt-3 text-onBackground text-base font-semibold bg-primary py-2 px-4 rounded-md hover:bg-primary-dark"
            >
              Visit Project &rarr;
            </a>
          )}
        </div>

        <div className="w-full">
          <Image 
            src={image} 
            alt={name} 
            width={800}  
            height={500} 
            layout="responsive"
            className="rounded-md"
          />
          <p className="mt-3 text-onBackground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectLayout;
