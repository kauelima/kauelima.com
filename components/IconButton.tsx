import React from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";

interface IconButtonProps {
    buttonIcon: string;
    buttonLink: string;
    buttonAlt: string;
}

const IconButton: React.FC<IconButtonProps> = ({ buttonIcon, buttonLink,buttonAlt }) => {
    return (
        <Link href={buttonLink} legacyBehavior>
            <a className="flex bg-surfaceAlt hover:bg-surfaceAlt-dark text-onsurfaceAlt p-3 rounded-full text-center" target="_blank">
                <Image src={buttonIcon} alt={buttonAlt} width={24} height={24} />
            </a>
        </Link>
    );
};

export default IconButton;
