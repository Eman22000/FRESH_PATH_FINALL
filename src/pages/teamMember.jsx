import React from 'react';
import './teamMember.css';
import { useParams } from 'react-router-dom';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import { BASE_API_URL } from "../config";

// بيانات الفريق للبحث عن العضو بناءً على `id`
const teamMembers = [
    { id: 1, name: 'Marcel Guani', role: 'Founder', image: t2 },
    { id: 2, name: 'Chef Marcel Guani', role: 'Cook', image: t3 },
    { id: 3, name: 'Chef Marcel Guani', role: 'Senior Chef', image: t4 },
    { id: 4, name: 'Chef Marcel Guani', role: 'Baker', image: t2 },
];
console.log(BASE_API_URL)

const Member = () => {
    const { id } = useParams(); // استخراج `id` من الرابط
    const member = teamMembers.find((m) => m.id === parseInt(id)); // البحث عن بيانات العضو

    if (!member) {
        return <h1>Member not found</h1>;
    }

    return (
        <section className="quote-section">
            <div className="quote-container">
                <div className="quote-content">
                    <h2 className="quote-title">
                        {member.role} - {member.name}
                    </h2>
                    <p className="quote-text">
                        Food is not just nourishment; it's an experience to be shared and cherished.
                        We believe every meal should evoke memories and emotions.
                    </p>
                    <div className="signature-block">
                        <span className="chef-name">{member.name}</span>
                        <svg className="leaf-icon" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M15.5 8.5c1.5 1.5 2.5 3.5 2.5 5.5 0 4.14-3.36 7.5-7.5 7.5S3 18.14 3 14c0-2 1-4 2.5-5.5L12 2l3.5 6.5z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <div className="chef-image-container">
                    <img
                        src={member.image}
                        alt={`${member.name} smiling in chef's uniform and hat`}
                        className="chef-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Member;
