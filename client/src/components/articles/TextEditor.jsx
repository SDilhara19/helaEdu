import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';

export default function TextEditor() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    return (
        <div className='my-7 border border-blue rounded-xl'>
            <JoditEditor 
                ref={editor} 
                value={content} 
                onChange={newContent => setContent(newContent)} 
            />
            {/* <div>{content}</div>
            <div>{HTMLReactParser(content)}</div> */}
            <style jsx global>{`
                .jodit-status-bar-link {
                    color:white !important;
                }
            `}</style>
        </div>
    );
}
