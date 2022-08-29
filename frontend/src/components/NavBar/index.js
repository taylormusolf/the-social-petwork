import './index.scss';

const NavBar = (props) => {
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className='logo'><img src="./assets/images/dog-24.svg"/></div>
          <h2 className="header"><div>The Social Petwork</div></h2>
          <div className="greeting">
            <a href="">Login</a>
            <a href="">Sign Up</a>
          </div>
        </nav>
      </div>
      
    </>
  )
}

export default NavBar;