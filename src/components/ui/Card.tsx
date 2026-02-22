import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    className?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    padding = 'md',
    hoverable = false,
    className = ''
}) => {
    const classes = [
        'hero-card',
        `hero-card--padding-${padding}`,
        hoverable ? 'hero-card--hoverable' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {children}
        </div>
    );
};

export default Card;
