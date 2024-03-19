// src/app/pages/projects/fieldy.tsx
'use client'
import ProjectLayout from '../../../components/ProjectLayout';

const Project: React.FC = () => {
    return (
        <>
            <ProjectLayout 
                name='Redesign Fieldy'
                color='projectBlue'
                description='Fieldy was developed in partnership with MBLabs, a software-house in Campinas, Brazil for Fieldy. Fieldy is a company inside of Ativy group focused on developing mobility solutions for sales representative in the field.'
                role={['Product Designer','Project Manager']}
            />
        </>
    );
};

export default Project;  