import React, { useState, useRef, useCallback } from 'react';
import './App.css';
import Template from './Template';
import CommentInput from './commentInput';
import Comment from './Comment';
import Article from './Article';


function App() {

  const [comments, setComments] = useState([
    { id: 1, name: 'Minjoo Park', content: 'I like it!', }
  ]);

  const [like, setLike] = useState(0);  //좋아요 버튼구현


  const nextId = useRef(1);

  const onInsert = useCallback(
    (name, content) => {
      const comment = {
        id: nextId.current,
        name,
        content
      };
      console.log(name);
      console.log(content);
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );


  return (
    <div>
      <Template>
        <Article />
        <h3>LIKE<span onClick={() => { setLike(like + 1) }}>👍🏻</span>{like}</h3>
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              content={comment.content}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
