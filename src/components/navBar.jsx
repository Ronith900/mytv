//Stateless functional component, Cause this component doesn't use any state
// When we are not using class, this will not work so we need to pass prop as an argument, react will pass prop in run time
const NavBar = ({ totalValue }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Navbar {totalValue}</span>
      </div>
    </nav>
  );
};

export default NavBar;
