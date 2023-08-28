const Navbar = () => {
    return ( 
    <nav className="Navbar">
        <header>
        <h1>Water Level Reader</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/create" style={{
                backgroundColor: "royalblue",
                color: "white",
                borderRadius: "10px"
            }}>Add Device</a>
        </div>
        </header>
        <footer>
  <div className="container">
    <p>All Right Reserved. 2023</p>
  </div>
</footer>
    </nav> );
}
 
export default Navbar;