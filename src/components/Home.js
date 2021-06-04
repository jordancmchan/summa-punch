import summaLogo from '../assets/summaLogo.png';
import signatureDrinks from './_signatureDrinks.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


import {useState} from 'react'; 

function Home() {

    const [currentImg , setCurrentImg] = useState(0);

    function homeChange () {
        setCurrentImg(currentImg + 1);

        if (currentImg >= signatureDrinks.length - 1){
            setCurrentImg(0)
        }
    }

    return(
        <div>
            <nav>
                <div className="logoContainer">
                        <img src={summaLogo} alt="summer vibes logo"/>
                </div>
                <ul className = "navContainer">
                    <li><a href="">Signature Drinks</a></li>
                    <li><a href="#specialItems">Special Items</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>
            <section className="signatureDrinkSection">
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
                    <div className="centerInnerContainer">
                        <img src={signatureDrinks[currentImg].image} alt=""/>
                        <FontAwesomeIcon icon={faAngleRight} onClick={homeChange}/>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="rightContainerDes">
                        <h3>{signatureDrinks[currentImg].name}</h3>
                        <div className="decorationBar"></div>
                        <ul className="flavoursContainer">
                            {
                                signatureDrinks[currentImg].flavours.map((flavour) => {
                                    return(
                                        <li>
                                            {flavour}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home; 