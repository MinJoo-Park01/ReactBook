import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './CommentInput.css';

const CommentInput = ({ onInsert }) => {
    const [value, setValue] = useState({
        name: '',
        content: ''
    });

    const onChangeName = useCallback(
        (e) => {
            setValue({
                name: e.target.value,
                content: value.content,
            });
        },
        [value]
    );

    const onChangeContent = useCallback(
        (e) => {
            setValue({
                name: value.name,
                content: e.target.value,
            });
        },
        [value]
    );


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
                onChange={onChangeName}
            />
            <input placeholder="댓글"
                value={value.content}
                onChange={onChangeContent}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default CommentInput;