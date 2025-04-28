import '../styles/Skills.css'

function Skillsbar({ skill, level }) {
    return (
        <div className='skill-bar'>
            <p className='skill-name'>{skill}</p>
            <div className='skill-level'>
                <div className='skill-progress'
                    style={{ width: level }} >
                    <span className='lora level-percentage'></span>
                </div>
            </div>
        </div>)
}
export default Skillsbar