import React, { useState } from 'react';

export const Form = () => {
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
    const [outputText, setOutputText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleKeyEvent = (e) => {
        if (e.key === 'Enter') {
            setShow(true);
            if (text.startsWith('/1')) {
                const outputText = text.substring(2);
                setOutputText(<h1>{outputText}</h1>);
                setText('');
            }
        }
        if (e.key === 'Escape') {
            setText('');
            setShow(false);
        }
    };

    return (
        <div className="w-7/12 mt-6">
            <input className="" type="text" value={text} placeholder="type / to filter, @ to add a link" onChange={handleChange} onKeyDown={handleKeyEvent} />
            <div>{outputText}</div>
        </div>
    );
};
