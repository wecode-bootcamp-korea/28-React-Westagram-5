import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <body>
      <nav>
        <div className="elements_1">
          <img
            className="instagram_icon"
            src="images/chaehyun/instagram.png"
            alt="인스타 아이콘"
          />
          <span className="title">westagram</span>
        </div>

        <div className="elements_2">
          <img
            alt="icon"
            className="instagram_icon"
            src="images/chaehyun/search.png"
          />
          <input type="text" placeholder="검색" />
        </div>

        <div className="elements_3">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="나침반 아이콘"
          />
          <img
            className="icon_heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="하트 아이콘"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="사람 아이콘"
          />
        </div>
      </nav>
      <main>
        <div className="feeds">
          <article>
            <div className="profile_box">
              <img
                src="https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                alt="icon"
              />
              <span>chaehyun</span>
              <i className="fa fa-ellipsis-h" aria-hidden="true" />
            </div>
            <img
              src="https://media.istockphoto.com/photos/paris-city-view-towards-la-defense-financial-district-picture-id171578638?b=1&k=20&m=171578638&s=170667a&w=0&h=9amcUhIPnxn2dVWhfqn8cXz_Xob2CYDHhShPgDpJueU="
              alt="icon"
            />
            <div className="bottom_image" />
            <div className="icon_box">
              <div>
                <img
                  className="instagram_icon"
                  src="images/chaehyun/heart.png"
                  alt="icon"
                />
                <img
                  className="instagram_icon"
                  src="images/chaehyun/chat.png"
                  alt="icon"
                />
                <img
                  className="instagram_icon"
                  src="images/chaehyun/upload.png"
                  alt="icon"
                />
              </div>
              <div>
                <i className="fa fa-bookmark-o" aria-hidden="true" />
              </div>
            </div>

            <div className="like_status">
              <span>좋아요 999개</span>
            </div>
            <ul className="comment_list">
              <li>
                {' '}
                <span className="insta_id">ok_chaehyun</span>
                <span>우와 너무 멋져요😍</span>
              </li>
            </ul>
            <div className="count_comment">
              <span>댓글 92개 모두 보기</span>
            </div>
            <div className="time_info">
              <span>15분전</span>
            </div>
          </article>
          <div class="comment_wrap">
            <input class="comment_box" type="text" placeholder="댓글입력..." />
            <button class="comment_btn">게시</button>
          </div>
        </div>
        <aside>
          <div class="my_profile">
            <img
              src="https://images.unsplash.com/photo-1639128107506-21cb4c6a2f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="icon"
            />
            <div class="my_profile_name">
              <div>ok_chaehyun</div>
              <div>okchaehyun | 옥채현</div>
            </div>
          </div>

          <div class="recommend_people">
            <span>회원님을 위한 추천</span>
            <span>모두보기</span>
          </div>

          <div class="people_profile">
            <div class="recommendation_user">
              <img
                src="https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60https://images.unsplash.com/photo-1639134501889-66bc86217baa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                alt="icon"
              />
              <div class="name_box">
                <div class="name">ok_chaehyun</div>
                <div>okchaehyun | 옥채현</div>
              </div>
              <span>팔로우</span>
            </div>
            <div class="recommendation_user">
              <img
                alt="icon"
                src="https://images.unsplash.com/photo-1575993051801-d5a7940d78a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              />
              <div class="name_box">
                <div class="name">ok_chaehyun</div>
                <div>okchaehyun | 옥채현</div>
              </div>
              <span>팔로우</span>
            </div>
            <div class="recommendation_user">
              <img
                alt="icon"
                src="https://images.unsplash.com/photo-1575993051801-d5a7940d78a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              />
              <div class="name_box">
                <div class="name">ok_chaehyun</div>
                <div>okchaehyun | 옥채현</div>
              </div>
              <span>팔로우</span>
            </div>
            <div class="recommendation_user">
              <img
                alt="icon"
                src="https://images.unsplash.com/photo-1575993051801-d5a7940d78a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              />
              <div class="name_box">
                <div class="name">ok_chaehyun</div>
                <div>okchaehyun | 옥채현</div>
              </div>
              <span>팔로우</span>
            </div>
            <div class="recommendation_user">
              <img
                alt="icon"
                src="https://images.unsplash.com/photo-1575993051801-d5a7940d78a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              />
              <div class="name_box">
                <div class="name">ok_chaehyun</div>
                <div>okchaehyun | 옥채현</div>
              </div>
              <span>팔로우</span>
            </div>
          </div>

          <div class="info_link">소개 도움말 홍보센터 API 개인정보</div>
          <div class="info_link">ⓒ2021 Instagram from Meta</div>
        </aside>
        <script src="js/main.js" />
      </main>
    </body>
  );
};

export default Main;
