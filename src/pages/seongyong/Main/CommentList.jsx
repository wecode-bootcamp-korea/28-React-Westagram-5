import React from 'react';

const CommentList = ({ comment }) => {
  return (
    <li id="wecode">
      <span className="myName">Wecode_28기 엄성용</span>
      <span>{comment}</span>
    </li>
  );
};

export default CommentList;
