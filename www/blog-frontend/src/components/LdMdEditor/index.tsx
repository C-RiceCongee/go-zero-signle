// To inform next js, this is a client component 
"use client";
import React, { useMemo, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const PlainTextExample = () => {

    const initialValue: Descendant[] = [
        {
            type: 'paragraph',
            children: [
                { text: 'This is editable plain text, just like a <textarea>!' },
            ],
        },
    ]
    // Create a Slate editor object that won't change across renders.
    const [editor] = useState(() => withReact(createEditor()))
    return <Slate editor={editor} initialValue={initialValue} >
        <Editable />
    </Slate>

}


export default PlainTextExample