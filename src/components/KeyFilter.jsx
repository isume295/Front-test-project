import React from 'react';
import { TbHeading } from 'react-icons/tb';

export const KeyFilter = () => {
    return (
        <div className="w-7/12">
            <div className="w-5/12 h-80 border rounded-md shadow-lg ">
                <div className="flex flex-col justify-start items-start ">
                    <h1 className="font-semibold text-black pt-2 px-2">Add blocks</h1>
                    <p className="px-2">Keep typing to filter, or escape to exit </p>
                    <div className="flex w-full mt-2 flex-col gap-2 ">
                        <p className="text-gray-500 p-2">
                            Filtering key <span className="p-[2px] rounded-sm text-white bg-mainColor">1</span>
                        </p>
                        <div className="mt-2 flex flex-col">
                            <div className="flex w-full justify-start gap-2 items-center p-1 bg-gray-100">
                                <TbHeading className="text-4xl" />
                                <div className="flex flex-col">
                                    <h1 className="text-black font-semibold text-md">Heading 1</h1>
                                    <p className="text-sm">shortcut: type # + space</p>
                                </div>
                            </div>
                            <div className="flex w-full justify-start gap-2 items-center p-1">
                                <TbHeading className="text-4xl" />
                                <div className="flex flex-col">
                                    <h1 className="text-black font-semibold text-md">Expandaple Heading 1</h1>
                                    <p className="text-sm">shortcut: type {'>>'} + space</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
