// src/components/SocialLink.jsx
import React from 'react';

export const SocialLink = ({ icon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-md hover:text-white hover:cursor-pointer"
        >
            <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
            <span>{label}</span>
        </a>
    );
};
