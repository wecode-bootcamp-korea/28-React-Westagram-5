import React, { useEffect, useState } from 'react';
import MainNav from './MainNav/MainNav';
import MainComment from './MainComment/MainComment';
import MainRight from './MainRight/MainRight';
import '@fortawesome/fontawesome-free/js/all.js';
import './Main.scss';
import './MainNav/MainNav.scss';
import './MainRight/MainRight.scss';

const Main = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  // const [btnActivated, setBtnActivated] = useState(false);
  console.log(comment.length);

  const updateComment = e => {
    setComment(e.target.value);
    // if (e.target.value) {
    //   setBtnActivated(true);
    // } else {
    //   setBtnActivated(false);
    // }
  };

  const isVariable = comment.length ? true : false;

  const addFeedComment = () => {
    if (!comment) return;
    setCommentList([...commentList, comment]);
    // ... -> 스프레드 : 봉투를 전부 풀어해친 후 묶는다 느낌, 빈배열(commentList)을 풀어해친 후 새로 들어오는 문자열(comment)을 배열에 넣어 출력, [...@, ...@]형태 자주 쓰임

    // const arr = commentList.concat(comment); -> 빈배열(commentList)에 concat 메소드를 활용해서 새로 들어오는 문자열(comment)를 넣어 변수 arr에 할당
    // setCommentList(arr); -> 배열 arr을 setCommentList에 담아 commentList에 출력

    setComment('');
    // setBtnActivated(false);
  };

  const keyEnter = e => {
    if (e.key === 'Enter') {
      addFeedComment();
    }
  };

  const [commnetData, commnetSetData] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(res => commnetSetData(res));
  }, []);

  const isLogined = true;

  return (
    <>
      <MainNav />
      <main className="container">
        <aricle className="feeds">
          <div className="feedsProfile">
            <div className="feedsProfileImgAndName">
              <img src="images/seokho/My_Picture.jpeg" alt="My_Picture" />
              <span>Seokho__lee</span>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <section className="feedsImageWrapper">
            <img
              src="images/seokho/interior.jpeg"
              alt="interior"
              className="feeds-img"
            />
          </section>
          <div className="feedsIcons">
            <div className="feedsIconsLeft">
              <i class="far fa-heart" />
              <i className="far fa-comment" />
              <i className="fas fa-external-link-alt" />
            </div>
            <div className="feedsIconsRight">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="feedsWrites">
            <div className="writesLike">
              <div className="writesLikeWrapper">
                <img
                  src="images/seokho/contents-write-profile.jpg"
                  alt="feedsWriteProfile"
                />
                <span>fritzhansen님 외 1,895명이 좋아합니다</span>
              </div>
            </div>
            <span className="writesMain">
              Seokho__lee 미드센추리 모던 인테리어...
              <span className="writesColor"> 더 보기</span>
            </span>
            <ul className="writesWrite">
              {commnetData.map(commentItem => {
                return (
                  <li key={commentItem.id}>
                    <span>{commentItem.comment}</span>
                    <img src={commentItem.src} alt={commentItem.alt} />
                  </li>
                );
              })}

              {/* <li>
                <span>neceosecius 너무 좋네요~~~~~~~~!!!</span>
                <img src="images/seokho/heart.png" alt="heart" />
              </li>
              <li>
                <span>white 컬러가 좋네요</span>
                <img src="images/seokho/heart.png" alt="heart" />
              </li> */}

              {commentList.map(commentItem => {
                return <MainComment comment={commentItem} key="idx" />;
              })}
              <li className="writesColor">42분 전</li>
            </ul>
          </div>
          <div className="feedsComment">
            <input
              value={comment}
              onChange={updateComment}
              onKeyPress={keyEnter}
              className="addComments"
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              className={isVariable && 'blue'}
              type="button"
              onClick={addFeedComment}
            >
              게시
            </button>
          </div>
        </aricle>
        {isLogined && <MainRight />}
      </main>
    </>
  );
};

export default Main;
