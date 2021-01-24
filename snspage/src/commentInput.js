import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './CommentInput.css';

const CommentInput = ({ onInsert }) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const onChangeName = useCallback(e => {
        setName(e.target.value);
    }, []);

    const onChangeValue = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(name);
            onInsert(value);
            setName('');
            setValue('');

            e.preventDefault();
        },
        [onInsert, name, value],
    );

    return (
        <form className="CommentInsert" onSubmit={onSubmit}>
            <input classNames="inputNames"
                placeholder="이름"
                name={name}
                onChange={onChangeName}
            />
            <input placeholder="내용"
                value={value}
                onChange={onChangeValue}
            />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default CommentInput;