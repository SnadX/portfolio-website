import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;