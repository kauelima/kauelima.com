import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    buttonText: string;
    buttonLink: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText, buttonLink }) => {
    return (
        <Link href={buttonLink} legacyBehavior>
            <a className="inline-block w-full bg-primary hover:bg-primary-dark text-onPrimary font-semibold text-base py-2 px-4 rounded-md text-center">
                {buttonText}
            </a>
        </Link>
    );
};

export default Button;
