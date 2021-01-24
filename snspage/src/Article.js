import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Article.css';

const Article = () => {
    return (
        <div className="content">
            <div className="title">[TIL] 리액트의 로고</div>
            <img src={logo} className="App-logo" class="center" alt="logo" />
            <div style={{ marginBottom: "5px" }}>오늘은 리액트의 로고에 대해서 공부해보았다. </div>
        </div>
    );
};

export default Article;