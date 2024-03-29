import React from 'react';
import { Info } from './Info';
import { Heading } from './Heading';
import { Form } from './Form';

export const Main = () => {
    return (
        <div className="flex flex-col items-center font-poppins w-full text-gray-400">
            <Info />
            <Heading />
            <Form />
        </div>
    );
};
