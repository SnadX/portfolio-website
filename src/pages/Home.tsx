import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Discord Music Bot',
        description: 'A Discord bot for playing music in voice channels. Written in Python using the discord.py library.',
        link: 'https://github.com/SnadX/discord-bot',
        /*imageUrl: 'https://example.com/project-one-image.jpg',*/
    },
    {
        id: 2,
        title: 'Pong Clone',
        description: 'A simple clone of Pong playable in the browser. Written in HTML, CSS, and JavaScript with no external libraries.',
        link: 'https://github.com/SnadX/pong-clone',
        /*imageUrl: 'https://example.com/project-two-image.jpg',*/
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'This site.',
        link: 'https://github.com/SnadX/portfolio-website',
        /*imageUrl: 'https://example.com/project-three-image.jpg',*/
    },
];

const Home: React.FC = () => {
    return (
        <>
            <section className="hero" id='home'>
                <h1>Jacky Wu</h1>
                <p>Computer Science graduate interested in Full-stack development.</p>
            </section>

            <section className="about" id='about'>
                <h2>About Me</h2>
                <p>
                    I enjoy creating solutions to complex problems and continuously learning new skills.
                </p>
            </section>

            <section className="projects" id='projects'>
                <h2>My Projects</h2>
                <div className="projects-container">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            /*imageUrl={project.imageUrl}*/
                        />
                    ))}
                </div>
            </section>

            <section className="contact">
                <h2>Contact Me</h2>
                <ul>
                    <li><a href="https://github.com/SnadX">GitHub</a></li>
                    <li><a href="mailto:wujacky0226@gmail.com">Email</a></li>
                </ul>
            </section>
        </>
    );
};

export default Home;