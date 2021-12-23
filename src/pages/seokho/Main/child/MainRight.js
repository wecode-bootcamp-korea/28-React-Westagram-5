export default function MainRight(props) {
  return (
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
  );
}
