import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Article.css';

const Article = () => {
    return (
        <div className="content">
            <div className="title">[TIL] 리액트의 로고</div>
            <img src={logo} className="App-logo" class="center" alt="logo" />
            <div style={{ marginBottom: "5px" }}>오늘은 리액트의 로고에 대해서 공부해보았다. 리액트 뿌시기 아자아자 화이팅!👊🏻👊🏻👊🏻
            다음주는 뭐 공부하지?!?! 추천할만한게 있다면 댓글 달아주세요~</div>
        </div>
    );
};

export default Article;