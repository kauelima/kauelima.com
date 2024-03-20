// src/app/pages/projects/example/page.tsx
'use client'
import ProjectLayout from '../../../components/ProjectLayout';

const Project: React.FC = () => {
    return (
        <>
            <ProjectLayout 
                name='Example project'
                color='projectBlue'

                //Summary of the project that goes on the card above the details.
                description='Compelling project descriptions in your product design/management portfolio showcase your process and impact. Highlight the problem you solved, your design solutions (wireframes, prototypes), and the positive results (user feedback, metrics). Keep it concise (around 3 sentences) and visually engaging with thumbnails.'
                //Role of the person in the project as an array. Please keep it short.
                role={['Product Designer','Project Manager']}

                // All the content in the details section goes here. Please make sure to keep the wrapping element and change only the inside content as needed
                details={[
                <>
                    <div key="details" className="flex flex-col h-full">
                        <strong>Design</strong>
                        <span>Design Process: Explain the steps of the design process you followed, including research, prototyping, and testing.</span>
                        <span>Design Challenges: Describe the main challenges you faced during the project and how you overcame them.</span>
                        <span>Design Solutions: Present the design solutions you implemented, including screenshots or high-quality images of the final design.</span>
                        <span>Design Impact: Detail how your design decisions impacted the success of the project.</span>
                        
                        <br/>
                        
                        <strong>Management</strong>
                        <span>Management Methodology: Explain the management methodology you used for the project (e.g., Agile, Scrum).</span>
                        <span>Success Metrics: Describe the metrics you used to measure the success of the project.</span>
                        <span>Management Challenges: Describe the main challenges you faced during the project and how you overcame them.</span>
                        <span>Project Results: Present the results of the project, including relevant data and metrics.</span>
                    </div>
                </>
            ]}
            />
        </>
    );
};

export default Project;  