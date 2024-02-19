import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaSass   } from "react-icons/fa";
import './Skills.scss'

const Skills = () => {
    const skillsArr = [
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Sass",
            "icon" : FaSass
        },

        {
            "name" : "Git",
            "icon" : FaGithub
        },

        {
            "name" : "Reactjs",
            "icon" : FaReact
        },

    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'> SKILLS</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                    className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;