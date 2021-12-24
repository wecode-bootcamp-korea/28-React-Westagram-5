function MainComment(props) {
  // const { comment } = props;

  return (
    <li>
      Seokho__lee {props.comment}
      <img src="images/seokho/heart.png" alt="heart" />
    </li>
  );
}

export default MainComment;

// <li key="idx">
//   Seokho__lee {comment}
//   {/* 커멘트를 props로 받아와야함 */}
//   <img src="images/seokho/heart.png" alt="heart" />
// </li>;
