import React, { useState } from 'react';
import { KeyFilter } from './KeyFilter';

export const Form = () => {
    const [text, setText] = useState('');
    const [listText, setListText] = useState([]);
    const [showKeyFilter, setShowKeyFilter] = useState(false);
    const [clicked, setClicked] = useState(false);

    // handle change event of the input field
    const handleChange = (e) => {
        const inputValue = e.target.value;
        setText(inputValue);
        setShowKeyFilter(inputValue.startsWith('/1'));
    };

    // handle second keydown event of the input field
    const handleClickedKeyEvent = (e) => {
        if (e.key === 'Enter') {
            console.log(text, 'txt');
            setListText([...listText, '/1' + text]);
            setText('');
            setClicked(false);
        } else if (e.key === 'Escape') {
            setText('');
            setClicked(false);
        }
    };

    // handle first keydown event of the input field
    const handleKeyEvent = (e) => {
        if (e.key === 'Enter') {
            if (text.startsWith('/1')) {
                setClicked(true);
                setText('');
            } else if (text.startsWith('/+1')) {
                setListText([...listText, text]);
            }
            setText('');
            setShowKeyFilter(false);
        }

        if (e.key === 'Escape') {
            setText('');
            setShowKeyFilter(false);
        }
    };

    return (
        <div className="lg:w-7/12 w-11/12 mt-6">
            <div>
                {listText.map((item, index) =>
                    item.startsWith('/1') ? (
                        <h1 className="font-semibold text-2xl text-black" key={index}>
                            {item.substring(2)}
                        </h1>
                    ) : item.startsWith('/+1') ? (
                        <span className="text-gray-500" key={index}>
                            {item.substring(3)}
                        </span>
                    ) : (
                        'invalid filter key'
                    )
                )}
            </div>
            <input
                className={`focus:outline-none w-full h-full ${clicked ? 'text-2xl font-semibold' : ''}`}
                type="text"
                value={text}
                placeholder={clicked ? 'Heading 1 ' : 'Type / for blocks, @ to link docs or people'}
                onChange={handleChange}
                onKeyDown={clicked ? handleClickedKeyEvent : handleKeyEvent}
            />
            {showKeyFilter && <KeyFilter />}
        </div>
    );
};
