import React from 'react';
import './Template.css';

const TodoTemplate = ({ children }) => {
    return (
        <div className="Template">
            <div className="app-title">ReactBook</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;