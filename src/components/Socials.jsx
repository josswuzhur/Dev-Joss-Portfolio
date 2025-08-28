// src/components/Socials.jsx
import React from 'react';
import { SocialLink } from './SocialLink';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github-white.svg';
import emailIcon from '../assets/gmail.svg';

export const Socials = () => {
    const links = [
        { icon: linkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/joss-lee-2693b5365/' },
        { icon: githubIcon, label: 'GitHub', href: 'https://github.com/josswuzhur' },
        { icon: emailIcon, label: 'Email', href: 'mailto:joss.lee.2002@gmail.com' },
    ];

    return (
        <div className="flex justify-center items-center gap-x-8 text-gray-400 text-md mb-8 max-w-lg mx-auto">
            {links.map((link) => (
                <SocialLink key={link.label} {...link} />
            ))}
        </div>
    );
};
