// src/app/pages/projects/fieldy.tsx
'use client'
import ProjectLayout from '../../../components/ProjectLayout';

const ProjectFieldy: React.FC = () => {
    return (
        <>
            <ProjectLayout 
                name='Project 1'
                description='Description Lorem'
                image='/../../images/fieldy.webp'
                role={['Product Designer', 'Product Manager']}
                lessonsLearned='Lessons Learned lorem'
                link='https://google.com'
            />
        </>
    );
};

export default ProjectFieldy;  