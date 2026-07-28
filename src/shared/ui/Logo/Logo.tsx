import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <Link to="/" className={className} style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', maxWidth: '100%' }}>
        <svg
            width="100%"
            height="auto"
            viewBox="0 0 550 130"
            preserveAspectRatio="xMinYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ maxHeight: '80px', display: 'block' }}
        >
            <defs>
                <linearGradient id="speedometerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00d2ff" />
                    <stop offset="100%" stopColor="#0052d4" />
                </linearGradient>

                <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e0f7fa" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            <path
                d="M 25 100 A 70 70 0 1 1 155 100"
                stroke="url(#speedometerGrad)"
                strokeWidth="7"
                fill="none"
                strokeDasharray="10 5"
                filter="url(#glow)"
            />
            <line x1="90" y1="90" x2="132" y2="48" stroke="#00d2ff" strokeWidth="4" strokeLinecap="round" filter="url(#glow)" />
            <circle cx="90" cy="90" r="5" fill="#00d2ff" />

            <g id="car-silhouette">
                <path
                    d="M 30 95 C 35 82, 48 78, 62 78 C 71 78, 78 64, 89 64 C 100 64, 107 78, 116 78 C 130 78, 143 82, 148 95 C 151 101, 143 104, 89 104 C 35 104, 27 101, 30 95 Z"
                    fill="#090d16"
                    stroke="#1e293b"
                    strokeWidth="2"
                />
                <path d="M 65 76 C 71 67, 107 67, 113 76 Z" fill="#0284c7" opacity="0.4" />
                <ellipse cx="45" cy="89" rx="9" ry="3" fill="#ffffff" filter="url(#glow)" />
                <ellipse cx="133" cy="89" rx="9" ry="3" fill="#ffffff" filter="url(#glow)" />
                <path d="M 67 98 L 111 98" stroke="#00d2ff" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow)" />
            </g>

            <text
                x="175"
                y="72"
                fontFamily="'Montserrat', 'Arial Black', sans-serif"
                fontWeight="900"
                fontSize="48"
                fontStyle="italic"
                fill="#ffffff"
            >
                Drive
            </text>
            <text
                x="305"
                y="72"
                fontFamily="'Montserrat', 'Arial Black', sans-serif"
                fontWeight="900"
                fontSize="48"
                fontStyle="italic"
                fill="url(#textGrad)"
            >
                Market
            </text>

            <line x1="175" y1="95" x2="200" y2="95" stroke="#00d2ff" strokeWidth="2" />
            
            <text
                x="208"
                y="98"
                fontFamily="'Montserrat', sans-serif"
                fontSize="10"
                fontWeight="600"
                letterSpacing="2"
                fill="#94a3b8"
            >
                ТВОЯ МРІЯ. ТВОЯ ДОРОГА. НАЙКРАЩІ АВТО.
            </text>

            <line x1="518" y1="95" x2="540" y2="95" stroke="#00d2ff" strokeWidth="2" />
        </svg>
        </Link>
    );
};