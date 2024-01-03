import React from 'react';

export const Heading = () => {
    return (
        <div className="lg:w-7/12 w-11/12">
            <div className="flex w-full mt-5 flex-col justify-start items-start">
                <div className="flex flex-col w-full gap-2">
                    <h1 className="font-bold text-black text-4xl">Front-end developer test project </h1>
                    <div className="h-[1px] w-full bg-gray-200"></div>
                    <p className="text-gray-500">
                        Your goal is to make a page that looks exactly like this one, and has the ability to create H1 text simply by typing / then 1, then typing text, and hitting enter.
                    </p>
                </div>
            </div>
        </div>
    );
};
