export default function NavBar(){
    return(
        <>
            <header className="nav">
                <div className="container nav-inner">
                    <div style={{fontSize: 30}} className="brand">Apexcify <span className="accent">Technologys</span></div>
                    <nav>
                        <a href="#home">Home</a>
                        <a href="#products">Products</a>
                        <a style={{marginRight: 20}} href="#contact">Contact</a>
                    </nav>
                </div>
            </header>
        </>
    );
}