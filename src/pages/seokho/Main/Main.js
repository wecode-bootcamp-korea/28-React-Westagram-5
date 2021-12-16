import React from 'react';
// import { Link, useNavigate } from "react-router-dom";
import './Main.scss';

import '@fortawesome/fontawesome-free/js/all.js';

const Main = () => {
  return (
    <>
      <div className="navbarFixed">
        <nav className="navbar">
          <div className="navbar-logo">
            <i className="fab fa-instagram" />
            <div> </div>
            <span> Westagram</span>
          </div>
          <input type="text" placeholder="검색" id="navbar-search" />
          <div className="navbar-icons">
            <img src="images/seokho/explore.png" alt="explore" />
            <img src="images/seokho/heart.png" alt="heart" />
            <img src="images/seokho/profile.png" alt="profile" />
          </div>
        </nav>
      </div>
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
              <i className="fas fa-heart" />
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
                <span>dezeen님 외 10명이 좋아합니다</span>
              </div>
            </div>
            <span className="writes-main">
              Seokho__lee 미드센추리 모던 인테리어...
              <span className="writes-color"> 더 보기</span>
            </span>
            <ul className="writes-write">
              <li>
                <span>neceosecius 너무 좋네요~~~~~~~~!!!</span>
                <img src="images/seokho/heart.png" alt="heart" />
              </li>
              <li>
                <span>white 컬러가 좋네요</span>
                <img src="images/seokho/heart.png" alt="heart" />
              </li>
              <li className="writes-color">42분 전</li>
            </ul>
          </div>
          <div className="feeds-comment">
            <input
              className="addComments"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="submit" type="button">
              게시
            </button>
          </div>
        </aricle>

        <aside className="mainright">
          <div className="mainright-name">
            <img
              src="images/seokho/My_Picture.jpeg"
              alt="My_Picture"
              id="mainright-img"
            />
            <div className="mainright-name-word">
              <div>Seokho__lee</div>
              <div id="wecode">WeCode | 위코드 </div>
            </div>
          </div>
          <div className="mainright-story">
            <div className="story-storyAndview">
              <div className="story">스토리</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="story-people">
              <div className="story-profile">
                <img src="images/seokho/profile.png" alt="" />
                <div>
                  <p>yum_s</p>
                  <p className="time">16분 전</p>
                </div>
              </div>
              <div className="story-profile">
                <img src="images/seokho/profile.png" alt="" />
                <div>
                  <p>drink_eat_drink</p>
                  <p className="time">3시간 전</p>
                </div>
              </div>
              <div className="story-profile">
                <img src="images/seokho/profile.png" alt="" />
                <div>
                  <p>hyukyc</p>
                  <p className="time">20분 전</p>
                </div>
              </div>
              <div className="story-profile">
                <img src="images/seokho/profile.png" alt="" />
                <p>jiminkeek</p>
              </div>
            </div>
          </div>

          <div className="mainright-suggest">
            <div className="suggest-storyAndview">
              <div className="story">회원님을 위한 추천</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="suggest-people">
              <div className="suggest-profile">
                <div className="suggest-profileflex">
                  <img src="images/seokho/profile.png" alt="" />
                  <div>
                    <p>joaaaaahye</p>
                    <p className="time">_leqend_a님 외 2명이...</p>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>

              <div className="suggest-profile">
                <div className="suggest-profileflex">
                  <img src="images/seokho/profile.png" alt="" />
                  <div>
                    <p>rampart81</p>
                    <p className="time">ringo.in.seoul님 외 12...</p>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>

              <div className="suggest-profile">
                <div className="suggest-profileflex">
                  <img src="images/seokho/profile.png" alt="" />
                  <div>
                    <p>shawnjjoo</p>
                    <p className="time">jimmylee1220님 외 1...</p>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
          </div>
          <div className="mainright-terms">
            <div>
              instagram 정보 . 지원 . 홍보 센터 . API .<br />
              채용 정보 . 개인정보처리방침 . 약관 . <br />
              디렉터리 . 프로필 . 해시태그 . 언어
            </div>
            <div className="INSTA">2019 INSTAGRAM</div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default Main;
