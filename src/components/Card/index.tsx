import { FC, useState } from 'react';

import CardLoader from '@/components/Card/Loader.tsx';
import { CardProps } from '@/components/Card/types.ts';

const Card: FC<CardProps> = ({ data, isLoading }) => {
    const [play, setPlay] = useState<boolean>(true);

    if (isLoading) return <CardLoader />;

    return (
        <div className="card w-46 bg-white shadow-xl">
            <img
                src={play ? data?.gif.images.preview_gif.url : data?.gif.images['480w_still'].url}
                alt="Shoes"
                className="object-fill h-32 w-full rounded relative"
            />
            <button className="absolute top-0 right-0 left-0 bottom-0 text-white font-bold" onClick={() => setPlay((prev) => !prev)}>
                {play ? 'pause' : 'play'}
            </button>
        </div>
    );
};

export default Card;
