import summaLogo from '../assets/summaLogo.png';

function Home() {
    return(
        <div>
            <nav>
                <ul className = "navContainer">
                    <div className="logoContainer">
                        <img src={summaLogo} alt="summer vibes logo"/>
                    </div>
                    <li><a href="">Signature Drinks</a></li>
                    <li><a href="">Special Items</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Home; 