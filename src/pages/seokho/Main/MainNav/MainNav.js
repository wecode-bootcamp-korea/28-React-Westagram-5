export default function MainNav(props) {
  return (
    <div className="navbarFixed">
      <nav className="navbar">
        <div className="navbarLogo">
          <i className="fab fa-instagram" />
          <div className="navbarLogoLine" />
          <span>Westagram</span>
        </div>
        <input type="text" placeholder="검색" id="navbarSearch" />
        <div className="navbarIcons">
          <img src="images/seokho/explore.png" alt="explore" />
          <img src="images/seokho/heart.png" alt="heart" />
          <img src="images/seokho/profile.png" alt="profile" />
        </div>
      </nav>
    </div>
  );
}
