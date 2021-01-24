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

  const nextId = useRef(1);

  const onInsert = useCallback(
    name => {
      const comment = {
        id: nextId.current,
        name,
        content: comments['content']
      };
      setComments(comments => comments.concat(comment));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [comments],
  );


  return (
    <div>
      <Template>
        <Article />
        <CommentInput onInsert={onInsert} />
      </Template>
      <div style={{ marginBottom: "4rem" }}>
        {comments.map((comment, index) => {
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
