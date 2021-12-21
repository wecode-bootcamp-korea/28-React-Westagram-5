import React from 'react';
import './Main.scss';
import MainNav from './MainNav';

const Main = () => {
  return (
    <article id="all-wrapper">
      <MainNav />
      <article class="content-wrapper">
        <section class="feed">
          <section class="feed-profile">
            {/* <div class="feed-profile-left" ></div> */}
            <div class="feed-profile-photo">
              <img
                src="/images/youn11.jpeg"
                width="40px"
                height="40px"
                alt="이미지"
              />
            </div>
            <div class="feed-profile-account">youn11</div>
          </section>
          <div class="feed-profile-right">
            <img
              src="/images/storage복사본.png"
              width="25px"
              height="25px"
              alt="이미지"
            />
          </div>
        </section>

        <section class="feed-photo-container">
          <section class="feed-photo">
            <img
              src="/images/feedphoto.jpeg"
              width="615px"
              height="615px"
              alt="#"
            />
          </section>

          <article class="feed-under-photo-wrapper">
            <section class="feed-icons">
              <section class="feed-icons-left">
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
              <section class="feed-icons-right"> </section>
              <img
                src="/images/storage.png"
                width="25px"
                height="25px"
                alt="#"
              />
            </section>

            <section class="feed-like"> 좋아요 71개 </section>
            <section class="comment-wrapper">
              <div class="feed-account">youn11</div>
              <div class="feed-comment">present</div>
            </section>
            <ul id="feed-reply-wrapper">
              <li>
                <span>yun_l</span>
                <span> ♥♡ </span>
              </li>
            </ul>

            <section class="feed-reply-input">
              <div class="feed-reply-input-input">
                <input type="text" id="repl" placeholder="댓글 달기..." />
              </div>

              <div class="feed-reply-input-button">
                <button disabled>게시</button>
              </div>
            </section>
          </article>
        </section>

        <article class="sidebar-wrapper">
          <section class="sidebar-account">
            <section class="sidebar-account-image">
              <img
                src="images/youn11.jpeg"
                width="50px"
                height="50px"
                alt="#"
              />
            </section>

            <section class="sidebar-account-profile-wrapper">
              <div class="sidebar-account-profile-top">yun_l</div>

              <section class="sidebar-account-profile-bwrapper">
                <div class="sidebar-account-profile-bleft">FRRREEEE</div>
              </section>
            </section>
          </section>

          <section class="sidebar-story">
            <section class="sidebar-story-twrapper">
              <div class="sidebar-story-tleft">회원님을 위한 추천</div>
              <div class="sidebar-story-tright">모두보기</div>
            </section>

            <section class="sidebar-story-bwrapper">
              <section class="sidebar-story-account1">
                <div class="sidebar-story-account1-image">
                  <img
                    src="/images/crabber.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div class="sidebar-story-account1-right">
                  <div class="sidebar-story-account1-tright">crabber</div>
                  <div class="sidebar-story-account1-bright">대게나라 </div>
                </div>
              </section>

              <section class="sidebar-story-account2">
                <div class="sidebar-story-account2-image">
                  <img
                    src="/images/bread.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div class="sidebar-story-account2-right">
                  <div class="sidebar-story-account2-tright">
                    seasonable_bakery{' '}
                  </div>
                  <div class="sidebar-story-account2-bright">BREAD</div>
                </div>
              </section>

              <section class="sidebar-story-account3">
                <div class="sidebar-story-account3-image">
                  <img
                    src="/images/wongfilm.jpeg"
                    width="35px"
                    height="35px"
                    alt="이미지"
                  />
                </div>
                <div class="sidebar-story-account3-right">
                  <div class="sidebar-story-account3-tright">wong_film</div>
                  <div class="sidebar-story-account3-bright">Photograper</div>
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
