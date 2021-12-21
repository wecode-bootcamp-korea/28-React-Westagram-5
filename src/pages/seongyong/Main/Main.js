import './Main.scss';

const Main = () => {
  return (
    <>
      <section className="nav">
        <div className="logo">
          <div className="topLeft">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
              id="insta"
              alt="instaLogo"
              title="instaLogo"
            />
            <span>Westagram</span>
          </div>
          <div className="search">
            <div className="glass">
              <i className="fas fa-search" />
            </div>
            <input type="text" placeholder="검색" />
          </div>
          <div className="info">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore"
              title="explore"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
              title="profile"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
              title="heart"
            />
          </div>
        </div>
      </section>
      <div className="bigMiddleContainer">
        <section className="mainBox">
          <div className="feeds">
            <div className="mainTop">
              <div className="main-top-left-wrapper">
                <img
                  src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160412_13%2Fengelgail_1460421708445z4dmx_JPEG%2Fsea-1034911_960_720.jpg&type=sc960_832"
                  id="sea"
                  alt="AccountPicture"
                  title="AccountPicture"
                />
                <div className="account">
                  <h5>Wecode_28기 엄성용</h5>
                  <h6>Samoyed</h6>
                </div>
              </div>
              <i className="fas fa-ellipsis-h" />
            </div>
            <div className="mainimg">
              <img
                src="https://cdn.pixabay.com/photo/2020/07/30/06/12/dog-5449489_1280.jpg"
                alt="samoyed"
                title="samoyed"
              />
              <div className="textBox" />
            </div>
          </div>
          <div className="mainRight" />
          <div className="bottomMain">
            <div className="characters">
              <div className="farContainer">
                <i className="far fa-heart" />
                <i className="far fa-comment" />
                <i className="fas fa-upload" />
              </div>
              <div className="smallContainer">
                <i className="far fa-bookmark" />
              </div>
            </div>
            <div className="comment">
              <div className="topComment">
                <div className="friend">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAzMzBfNTkg%2FMDAxNTIyMzcxMjQ2OTg3.jqfbA4OqZ3BrhgRChb2VWqGDTZNfzVzeWOCrmcqi-y8g.9gj_Vp7sWCDBltpSs_x1-TaAwxFVfxUt-n9jkds9_I0g.JPEG.dvc3810%2Fwolf-3241382_640.jpg&type=sc960_832"
                    alt="wecode"
                    title="wecode"
                  />
                  <h6>Wecode_28기 외 4명이 좋아합니다</h6>
                </div>
              </div>
              <div className="middleComment">
                <ul>
                  <ol id="wecode">Wecode_28기 엄성용</ol>
                  <ol>
                    사모예드견(Samoyed dog)은 썰매용·가정견·애완용으로 많이
                    기른다. 북부 시베리아의 유목민 사모예드족이 옛날부터 기르던
                    썰매용 개로서, 부족의 이름을 따서 명명되었다.
                  </ol>
                </ul>
              </div>
              <div className="bottomComment">
                <input type="text" placeholder="댓글달기" />
                <button type="button">게시</button>
              </div>
            </div>
          </div>
        </section>
        <aside>
          <div class="sideContainer">
            <div className="sideTop">
              <img
                src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20160412_13%2Fengelgail_1460421708445z4dmx_JPEG%2Fsea-1034911_960_720.jpg&type=sc960_832"
                id="sea"
                alt="AccountPicture"
                title="AccountPicture"
              />
              <div className="sideTopInside">
                <span>Wecode_28기 엄성용</span>
                <h6>Wecode | 28기</h6>
              </div>
            </div>
            <div className="sideMiddle">
              <div className="story">
                <h4>스토리</h4>
                <h5>모두 보기</h5>
              </div>
              <div className="friendStory">
                <div className="sideFirstStory">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140304_97%2Fekaros3558_13939196318173OGiB_JPEG%2F1686367-1920x1280-Orion-Constellation.jpg&type=sc960_832"
                    alt="friend1"
                    title="friend1"
                  />
                  <div className="firstSmallAccount">
                    <h5>Instar</h5>
                    <h6>Friday_night</h6>
                  </div>
                </div>
                <div className="sideSecondStory">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDNfNDUg%2FMDAxNjE3NDU2ODk3NDQz.kcdnHRmvukQA6IXqzDoUT-qGctgMOr7BaWHIW6McQhgg.JAblgQsP-mNKjs6JO7EPLTrArU0UlDsEYgMUM1hVCtUg.JPEG.dan9199%2FIMG_6431.JPG&type=sc960_832"
                    alt="friend2"
                    title="friend2"
                  />
                  <div className="secondSmallAccount">
                    <h5>Latte is horse</h5>
                    <h6>Big_Brother</h6>
                  </div>
                </div>
                <div className="sideThirdStory">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjVfMTM1%2FMDAxNjM3ODQ2Njk3MTYy.T4b-bduSbpqKgDqsEFoaxVF27nXJSTOqtJklaNnBP0Mg.WrhQ38PYLVVGq2N0shOsy09lOCFetRqpDZSWbwfppf4g.JPEG.gkdmsdms2974%2Foutput_3801115789.jpg&type=sc960_832"
                    alt="friend3"
                    tilte="friend3"
                  />
                  <div className="thirdSmallAccount">
                    <h5>airport_thief</h5>
                    <h6>Incheon_Airport</h6>
                  </div>
                </div>
                <div className="sideFourthStory">
                  <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjJfNjgg%2FMDAxNjI0MzYwMjkxMjg1.KTruw39HP3PWfV4csyoSr81PfKp2hgRevGDmqjsTdPAg.NsQICe5NCDYD5hzwU_6pfzMVKo2YBkK0_x6kzTDvOhAg.JPEG.filmbybible%2Fimage.jpeg&type=sc960_832"
                    alt="friend4"
                    title="friend4"
                  />
                  <div className="fourthSmallAccount">
                    <h5>Loppi</h5>
                    <h6>Small_Brother</h6>
                  </div>
                </div>
                <div className="insideNickname" />
              </div>
            </div>
            <div className="sideBottom">
              <div className="bottomWrapper">
                <div className="storyBottom">
                  <h4>회원님을 위한 추천</h4>
                  <h5>모두 보기</h5>
                </div>
                <div className="bottomfirstWrapper">
                  <div className="bottomFirstStory">
                    <img
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140304_97%2Fekaros3558_13939196318173OGiB_JPEG%2F1686367-1920x1280-Orion-Constellation.jpg&type=sc960_832"
                      alt="friend1"
                      title="friend1"
                    />
                    <div className="firstBottomAccount">
                      <h5>Instar</h5>
                      <h6>Friday_night</h6>
                    </div>
                  </div>
                  <button className="firstButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomSecondWrapper">
                  <div className="bottomSecondStory">
                    <img
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDNfNDUg%2FMDAxNjE3NDU2ODk3NDQz.kcdnHRmvukQA6IXqzDoUT-qGctgMOr7BaWHIW6McQhgg.JAblgQsP-mNKjs6JO7EPLTrArU0UlDsEYgMUM1hVCtUg.JPEG.dan9199%2FIMG_6431.JPG&type=sc960_832"
                      alt="friend2"
                      title="friend2"
                    />
                    <div className="secondBottomAccount">
                      <h5>Latte is horse</h5>
                      <h6>Big_Brother</h6>
                    </div>
                  </div>
                  <button className="secondButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomThirdWrapper">
                  <div className="bottomThirdStory">
                    <img
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjVfMTM1%2FMDAxNjM3ODQ2Njk3MTYy.T4b-bduSbpqKgDqsEFoaxVF27nXJSTOqtJklaNnBP0Mg.WrhQ38PYLVVGq2N0shOsy09lOCFetRqpDZSWbwfppf4g.JPEG.gkdmsdms2974%2Foutput_3801115789.jpg&type=sc960_832"
                      alt="friend3"
                      title="friend3"
                    />
                    <div className="thirdBottomAccount">
                      <h5>airport_thief</h5>
                      <h6>Incheon_Airport</h6>
                    </div>
                  </div>
                  <button className="thirdButton" type="button">
                    팔로우
                  </button>
                </div>
                <div className="bottomFourthWrapper">
                  <div className="bottomFourthStory">
                    <img
                      src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MjJfNjgg%2FMDAxNjI0MzYwMjkxMjg1.KTruw39HP3PWfV4csyoSr81PfKp2hgRevGDmqjsTdPAg.NsQICe5NCDYD5hzwU_6pfzMVKo2YBkK0_x6kzTDvOhAg.JPEG.filmbybible%2Fimage.jpeg&type=sc960_832"
                      alt="friend4"
                      title="friend"
                    />
                    <div className="fourthBottomAccount">
                      <h5>Loppi</h5>
                      <h6>Small_Brother</h6>
                    </div>
                  </div>
                  <button className="fouthButton" type="button">
                    팔로우
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="foot" />
        </aside>
      </div>
    </>
  );
};

export default Main;
