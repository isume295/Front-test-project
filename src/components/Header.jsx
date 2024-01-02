import React from 'react';
import { GoBook } from 'react-icons/go';
import { FiUnlock } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const Header = () => {
    return (
        <div className="flex text-gray-400 font-poppins h-12 px-4 justify-between items-center">
            {/* Left side */}
            <div className="flex gap-4 justify-between items-center">
                <MdKeyboardDoubleArrowRight />
                <div className="flex justify-center gap-3 items-center">
                    <div className="flex justify-center gap-2 items-center font-bold ">
                        <GoBook />
                        <span className="underline">Main</span>
                    </div>
                    <span>/</span>
                    <span>Getting started</span>
                    <span>/</span>
                    <span>Front-end developer test proje...</span>
                </div>
            </div>
            {/* Right side */}
            <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-2">
                    <FiUnlock />
                    <span>Editing</span>
                </div>
                <span>|</span>
                <div className="flex justify-center items-center gap-2 font-bold text-mainColor">
                    <span>Publish Space</span>
                    <RiArrowDropDownLine className="text-3xl" />
                </div>
            </div>
        </div>
    );
};
