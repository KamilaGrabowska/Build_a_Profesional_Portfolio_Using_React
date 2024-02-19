import AvatarCopy from '../assets/AvatarCopy.jpg';
import './About.scss'

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">

                    A dedicated and hardworking Junior Frontend Developer transitioning from the logistics
                    industry to IT. I bring strong analytical skills and a passion for problem-solving, driving me to continually improve in the programming realm. Always eager for new challenges, I find joy in exploring cutting-edge technologies and creating innovative solutions.
                    My experience in the logistics sector has instilled in me flexibility,
                    quick decision-making, and effective communication – skills that
                    I now transfer to the field of Frontend Development.
                    My mission is to thrive in the dynamic IT environment, invest effort in crafting
                    intuitive and aesthetically pleasing user interfaces, and deliver value through an
                    innovative approach to projects.
                </p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={AvatarCopy} alt="Kamila Garbowska foto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;