import React from 'react';
import './team.css';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import { Link } from 'react-router-dom';

const Team = () => {
    const teamMembers = [
        { id: 1, name: 'Marcel Guani', role: 'Founder', image: t2 },
        { id: 2, name: 'Chef Marcel Guani', role: 'Cook', image: t3 },
        { id: 3, name: 'Chef Marcel Guani', role: 'Senior Chef', image: t4 },
        { id: 4, name: 'Chef Marcel Guani', role: 'Baker', image: t2 },
    ];

    return (
        <section className="team-section">
            <div className="team-container">
                <div className="team-header">
                    <span className="subtitle">MEET THE TEAM</span>
                    <h2 className="title">Meet the people<br />behind La Mansa.</h2>
                </div>
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <Link to={`/member/${member.id}`} key={member.id}>
                            <div className="team-card">
                                <div className="image-container">
                                    <img src={member.image} alt={member.name} className="member-image" />
                                </div>
                                <div className="member-info">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
