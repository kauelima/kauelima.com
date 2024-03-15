import React from 'react';
import Button from './Button';
import Image from 'next/image';

interface CardProps {
    image?: string;
    title?: string;
    text?: string;
    buttonText?: string;
    buttonLink?: string;
}

const Card: React.FC<CardProps> = ({ image, title, text, buttonText, buttonLink }) => {
    return (
        <div className="flex flex-col w-full min-w-[300px] rounded-2xl overflow-hidden shadow-lg bg-surface">
            {image && (
                <div className="w-full h-0 pb-[40%] relative overflow-hidden">
                    <Image
                        src={image}
                        alt={title ?? 'Card Image'}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            )}
            <div className="flex flex-col flex-grow p-6 space-y-6">
                <div className="flex flex-col flex-grow">
                    {title && <div className="font-bold text-xl mb-2 text-onSurface">{title}</div>}
                    {text && <p className="text-onSurface text-base">{text}</p>}
                </div>
                {buttonText && buttonLink && (
                    <div className="mt-auto">
                        <Button buttonText={buttonText} buttonLink={buttonLink} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
