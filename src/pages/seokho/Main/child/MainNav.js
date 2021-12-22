export default function MainNav(props) {
  return (
    <div className="navbarFixed">
      <nav className="navbar">
        <div className="navbar-logo">
          <i className="fab fa-instagram" />
          <div className="borderLine" />
          <span>Westagram</span>
        </div>
        <input type="text" placeholder="검색" id="navbar-search" />
        <div className="navbar-icons">
          <img src="images/seokho/explore.png" alt="explore" />
          <img src="images/seokho/heart.png" alt="heart" />
          <img src="images/seokho/profile.png" alt="profile" />
        </div>
      </nav>
    </div>
  );
}
