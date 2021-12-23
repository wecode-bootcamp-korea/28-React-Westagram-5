import React from 'react';
import './Main.scss';
import MainNav from './MainNav';

const Main = () => {
  return (
    <article id="all-wrapper">
      <MainNav />
      <article className="content-wrapper">
        <section className="feed">
          <section className="feed-profile">
            {/* <div className="feed-profile-left" ></div> */}
            <div className="feed-profile-photo">
              <img
                src="/images/youn11.jpeg"
                width="40px"
                height="40px"
                alt="이미지"
              />
            </div>
            <div className="feed-profile-account">youn11</div>
          </section>
          <div className="feed-profile-right">
            <img
              src="/images/storage복사본.png"
              width="25px"
              height="25px"
              alt="이미지"
            />
          </div>
        </section>

        <section className="feed-photo-container">
          <section className="feed-photo">
            <img
              src="/images/feedphoto.jpeg"
              width="615px"
              height="615px"
              alt="#"
            />
          </section>

          <article className="feed-under-photo-wrapper">
            <section className="feed-icons">
              <section className="feed-icons-left">
                <img
                  src="/images/heart.png"
                  width="25px"
                  height="25px"
                  alt="#"
                />
                <img
                  src="/images/ball.png"
                  width="25px"
                  height="25px"
                  alt="#"
                />
                <img
                  src="/images/call.png"
                  width="25px"
                  height="25px"
                  alt="#"
                />
              </section>
              <section className="feed-icons-right"> </section>
              <img
                src="/images/storage.png"
                width="25px"
                height="25px"
                alt="#"
              />
            </section>

            <section className="feed-like"> 좋아요 71개 </section>
            <section className="comment-wrapper">
              <div className="feed-account">youn11</div>
              <div className="feed-comment">present</div>
            </section>
            <ul id="feed-reply-wrapper">
              <li>
                <span>yun_l</span>
                <span> ♥♡ </span>
              </li>
            </ul>

            <section className="feed-reply-input">
              <div className="feed-reply-input-input">
                <input type="text" id="repl" placeholder="댓글 달기..." />
              </div>

              <div className="feed-reply-input-button">
                <button disabled>게시</button>
              </div>
            </section>
          </article>
        </section>

        <article className="sidebar-wrapper">
          <section className="sidebar-account">
            <section className="sidebar-account-image">
              <img
                src="images/youn11.jpeg"
                width="50px"
                height="50px"
                alt="#"
              />
            </section>

            <section className="sidebar-account-profile-wrapper">
              <div className="sidebar-account-profile-top">yun_l</div>

              <section className="sidebar-account-profile-bwrapper">
                <div className="sidebar-account-profile-bleft">FRRREEEE</div>
              </section>
            </section>
          </section>

          <section className="sidebar-story">
            <section className="sidebar-story-twrapper">
              <div className="sidebar-story-tleft">회원님을 위한 추천</div>
              <div className="sidebar-story-tright">모두보기</div>
            </section>

            <section className="sidebar-story-bwrapper">
              <section className="sidebar-story-account1">
                <div className="sidebar-story-account1-image">
                  <img
                    src="/images/crabber.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div className="sidebar-story-account1-right">
                  <div className="sidebar-story-account1-tright">crabber</div>
                  <div className="sidebar-story-account1-bright">대게나라 </div>
                </div>
              </section>

              <section className="sidebar-story-account2">
                <div className="sidebar-story-account2-image">
                  <img
                    src="/images/bread.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div className="sidebar-story-account2-right">
                  <div className="sidebar-story-account2-tright">
                    seasonable_bakery{' '}
                  </div>
                  <div className="sidebar-story-account2-bright">BREAD</div>
                </div>
              </section>

              <section className="sidebar-story-account3">
                <div className="sidebar-story-account3-image">
                  <img
                    src="/images/wongfilm.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div className="sidebar-story-account3-right">
                  <div className="sidebar-story-account3-tright">wong_film</div>
                  <div className="sidebar-story-account3-bright">
                    Photograper
                  </div>
                </div>
              </section>
            </section>
          </section>
        </article>
      </article>
    </article>
  );
};

export default Main;
