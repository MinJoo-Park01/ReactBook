import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './CommentInput.css';

const CommentInput = ({ onInsert }) => {
    const [value, setValue] = useState({
        name: '',
        content: ''
    });

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value.name, value.content);
            setValue({
                name: '',
                content: ''
            });

            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="CommentInsert" onSubmit={onSubmit}>
            <input classNames="inputNames"
                placeholder="이름"
                value={value.name}
                onChange={onChange}
            />
            <input placeholder="내용"
                value={value.content}
                onChange={onChange}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default CommentInput;