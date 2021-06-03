import summaLogo from '../assets/summaLogo.png';
import signatureDrinks from './signatureDrinks.js'



function Home() {
    return(
        <div>
            <nav>
                <ul className = "navContainer">
                    <div className="logoContainer">
                        <img src={summaLogo} alt="summer vibes logo"/>
                    </div>
                    <li><a href="">Signature Drinks</a></li>
                    <li><a href="#specialItems">Special Items</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>
            <section>
                <div className="leftContainer">
                    <div className="rumPunchContainer">
                        <div className="decorationBar"></div>
                        <h2>Homemade rum punch</h2>
                        <p>Homemade rum punch: a mixture of Caribbean rums (white, spiced and overproof) and various combinations of fruit nectars and juices.
                        </p>
                        <p>$25 <span>/ 750ml bottle</span></p>
                        <p>Free bottle with $100 purchase.</p>
                        <p>Custom sizing and flavour available upon <a href="">request</a></p>
                    </div>
                </div>
                <div className="centerContainer">

                </div>
                <div className="rightContainer">

                </div>
            </section>
        </div>
    )
}

export default Home; 