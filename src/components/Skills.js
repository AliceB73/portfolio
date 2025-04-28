import '../styles/Skills.css';
import Skillsbar from './Skillsbar';

function Skills() {
    return (
        <section id="skills">
            <h2 className='fjalla-one'>Mes Compétences</h2>
            <div className="skills-container">
                <Skillsbar skill="HTML5" level="90%" />
                <Skillsbar skill="CSS3" level="80%" />
                <Skillsbar skill="SASS" level="70%" />
                <Skillsbar skill="JavaScript" level="75%" />
                <Skillsbar skill="TypeScript" level="50%" />
                <Skillsbar skill="Bootstrap" level="50%" />
                <Skillsbar skill="React" level="50%" />
                <Skillsbar skill="PHP" level="65%" />
                <Skillsbar skill="SQL" level="50%" />
                <Skillsbar skill="WordPress" level="90%" />
                <Skillsbar skill="Git" level="60%" />
                <Skillsbar skill="GitHub" level="70%" />
            </div>
        </section>
    );
}

export default Skills;