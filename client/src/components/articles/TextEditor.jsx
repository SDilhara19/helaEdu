import React from 'react'
import { useState, useRef , useMemo } from 'react';
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';

export default function TextEditor() {
    const editor = useRef(null);
    const [content, setContent]= useState('')
    return (
        <div  className='my-7 border border-blue rounded-xl'>
        <JoditEditor ref={editor} value={content}  onChange={newContent => setContent(newContent) } />
            {/* <div >{HTMLReactParser(content)}</div> */}
        </div>
    )
}
