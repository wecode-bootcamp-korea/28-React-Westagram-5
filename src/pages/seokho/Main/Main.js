import React from 'react';
import './Main.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import { useEffect, useState } from 'react/cjs/react.development';

import MainNav from './child/MainNav';
import MainComment from './child/MainComment';
import MainRight from './child/MainRight';

const Main = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [btnActivated, setBtnActivated] = useState(false);
  // console.log(commentList);

  const updateComment = e => {
    setComment(e.target.value);
    if (e.target.value) {
      setBtnActivated(true);
    } else {
      setBtnActivated(false);
    }
  };

  const addFeedComment = () => {
    if (!comment) return;
    setCommentList([...commentList, comment]);
    // ... -> 스프레드 : 봉투를 전부 풀어해친 후 묶는다 느낌, 빈배열(commentList)을 풀어해친 후 새로 들어오는 문자열(comment)을 배열에 넣어 출력, [...@, ...@]형태 자주 쓰임

    // const arr = commentList.concat(comment); -> 빈배열(commentList)에 concat 메소드를 활용해서 새로 들어오는 문자열(comment)를 넣어 변수 arr에 할당
    // setCommentList(arr); -> 배열 arr을 setCommentList에 담아 commentList에 출력

    setComment('');
    setBtnActivated(false);
  };
  // console.log(commentList);

  const keyEnter = e => {
    if (e.key === 'Enter') {
      addFeedComment();
    }
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/commentData.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  // console.log(data);

  // const [feeds, setFeeds] = useState([]);
  return (
    <>
      <MainNav />
      <main className="container">
        <aricle className="feeds">
          <div className="feeds-profile">
            <div className="feeds-profile-imgAndName">
              <img src="images/seokho/My_Picture.jpeg" alt="My_Picture" />
              <span>Seokho__lee</span>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
          <section className="feeds-img-wrapper">
            <img
              src="images/seokho/interior.jpeg"
              alt="interior"
              className="feeds-img"
            />
          </section>
          <div className="feeds-icons">
            <div className="feeds-icons-left">
              {/* <i className="fas fa-heart" /> */}
              <i class="far fa-heart" />
              <i className="far fa-comment" />
              <i className="fas fa-external-link-alt" />
            </div>
            <div className="feeds-icons-right">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="feeds-writes">
            <div className="writes-like">
              <div className="writes-like-wrapper">
                <img
                  src="images/seokho/contents-write-profile.jpg"
                  alt="feeds-write-profile"
                />
                <span>fritzhansen님 외 1,895명이 좋아합니다</span>
              </div>
            </div>
            <span className="writes-main">
              Seokho__lee 미드센추리 모던 인테리어...
              <span className="writes-color"> 더 보기</span>
            </span>
            <ul className="writes-write">
              {data.map(ele => {
                return (
                  <li key={ele.id}>
                    <span>{ele.comment}</span>
                    <img src={ele.src} alt={ele.alt} />
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
              <li id="writes-color">42분 전</li>
            </ul>
          </div>
          <div className="feeds-comment">
            <input
              value={comment}
              onChange={updateComment}
              onKeyPress={keyEnter}
              className="addComments"
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              className={btnActivated ? 'blue' : ''}
              type="button"
              onClick={addFeedComment}
            >
              게시
            </button>
          </div>
        </aricle>
        <MainRight />
      </main>
    </>
  );
};

export default Main;
