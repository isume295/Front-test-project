import React from 'react';
import { Info } from './Info';
import { Heading } from './Heading';
import { KeyFilter } from './KeyFilter';

export const Main = () => {
    return (
        <div className="flex flex-col items-center font-poppins w-full text-gray-400">
            <Info />
            <Heading />
            <div className="w-7/12">
                <KeyFilter />
                {/* <div className="mt-9">
                    <span>this is the typing input</span>
                </div> */}
            </div>
        </div>
    );
};
