import summaLogo from '../assets/summaLogo.png';


function SpecialItems() {
    return(
        <div className = "specialItemsContainer" id ="specialItems">
            <div className="productContainer">
                <div className="productPanel">
                    <div className="productImageContainer">
                        <img src= {summaLogo} alt=""/>
                    </div>
                    <div className="productDescription">
                        <h2>Sorrel (Hibiscus Wine)</h2>
                        <p>Combination of hibiscus, dessert wines, and rum, with a hint of ginger and spice.</p>
                        <ul>
                            <li>$17 <span>/ 750 ML bottle</span></li>
                        </ul>
                    </div>
                </div>

                <div className="productPanel">
                    <div className="productImageContainer">
                        <img src= {summaLogo} alt=""/>
                    </div>
                    <div className="productDescription">
                        <h2>Pepper Sauce</h2>
                        <p>Made from secret recipe with home grown peppers</p>
                        <ul>
                            <li>$8 <span>/ 250 ML jar</span></li>
                            <li>$15 <span>/ 500 ML jar</span></li>
                            <li>$25 <span>/ 1 Litre jar</span></li>
                        </ul>
                    </div>
                </div>

                <div className="productPanel">
                    <div className="productImageContainer">
                        <img src= {summaLogo} alt=""/>
                    </div>
                    <div className="productDescription">
                        <h2>Gift Baskets</h2>
                        <p>A little extra love for the special occasions. Available upon request.</p>
                    </div>
                </div>
                
           
            </div>

        </div>
    )
}

export default SpecialItems; 