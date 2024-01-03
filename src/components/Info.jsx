import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { FiArrowDownLeft } from 'react-icons/fi';
import { FiCheckCircle } from 'react-icons/fi';
import { CiCloud } from 'react-icons/ci';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Info = () => {
    return (
        <div className="lg:w-7/12 w-11/12 flex">
            <div className="w-full border-2 rounded-lg h-12 mt-4 flex justify-between p-2">
                {/* Left side */}
                <div className="flex gap-3">
                    <div className="h-full w-6 rounded-sm bg-lightMain flex justify-center items-center">
                        <span className="text-secondColor font-semibold">P</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex justify-center items-center gap-1">
                        <IoMdTime className="text-2xl" />
                        <span>0min</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex justify-center items-center w-6 h-full rounded-full">
                        <img src="https://cdn-icons-png.flaticon.com/512/3464/3464365.png" alt="img" />
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex justify-center items-center gap-1">
                        <FiArrowDownLeft />
                        <span>0</span>
                    </div>
                </div>
                {/* Righ side */}
                <div className="flex h-full justify-center items-center gap-2">
                    <FiCheckCircle />
                    <CiCloud className="text-secondColor text-lg" />
                    <BsThreeDotsVertical className="text-black" />
                </div>
            </div>
        </div>
    );
};
