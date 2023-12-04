const Header = () => {


    return (
        < div className="header">
            <div className="heder-logo">
                <a href="#app">
                    <h3 className="header-name">Kamila <br/> Grabowska</h3>
                </a>
            </div>
            <div className="header-conatier">

                <div className="nav-item">
                    <a href="#about">About Me</a>
                </div>

                <div className="nav-item">
                    <a href="#projects">Projects</a>
                </div>

                <div className="nav-item">
                    <a href="#skills">Skills</a>
                </div>

            </div>


        </div>
    );

}

export default Header;
