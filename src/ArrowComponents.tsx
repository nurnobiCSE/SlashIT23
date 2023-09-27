import React from 'react';

const NextArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="slick-arrow md:block hidden" onClick={onClick}>
            <a href="" className="btn btn-circle  bg-teal-950 text-white">❯</a>
        </div>
    );
};

const PrevArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className="slick-arrow md:block hidden" onClick={onClick}>
             
                <a href="" className="btn btn-circle bg-blue-950 text-white">❮</a>
             
        </div>
    );
};

export { NextArrow, PrevArrow };
