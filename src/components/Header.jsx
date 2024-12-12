import './style.css';
import logo from "../assets/logo.png";
import {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faBagShopping , faUser} from '@fortawesome/free-solid-svg-icons';
import { faInstagram,faLinkedin, faGooglePay, faCcPaypal, faCcMastercard, faApplePay, faCcAmex } from '@fortawesome/free-brands-svg-icons';

function Header(){
     
    const[products, setProducts]= useState([]);
    const [showRec, setShowRec] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [showIdeal, setShowIdeal] = useState(false);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
                        .then(res=> res.json())
                        .then(data => {
                            console.log(data);
                            setProducts(data);
                        })
                        .catch(error=> console.error("Error: "+ error));
        
    },[])
     
    return(
        <>
          <div className='headerDiv'>
            <div className='upside'>
            <div className='logo'>
                <img src={logo} alt="" />
              </div>
              <div className='title'>
                <p>LOGO</p>
              </div>
              <div className='header-rightside'>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{color:'black'}}/>
              <FontAwesomeIcon icon={faHeart} style={{color:'black'}}/>
               <FontAwesomeIcon icon={faBagShopping} style={{color:'black'}}/>
               <FontAwesomeIcon icon={faUser} style={{color:'black'}}/>
              </div>
            </div>
            <div className='navSide'>
                <ul>
                    <li>Shop</li>
                    <li>Skills</li>
                    <li>Stories</li>
                    <li>About</li>
                    <li>Contant Us</li>
                </ul>
            </div>
          </div>

          <div className="textDiv">
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quisquam </p>
            <p>dolorum rem vero at fugit assumenda aliquam! Maiores cum</p>
          </div>
          <div className="selectionDiv">
            <div className="itemsDiv">
              <p>3425 ITEMS</p>
            </div>
            <div className="filterDiv">
              <button onClick={()=> setShowFilter(!showFilter)}>SHOW FILTER</button>
            </div>
            <div className="recommdationDiv">
              <button onClick={() => setShowRec(!showRec)}>RECOMMENDED</button>
              {showRec && ( <div className="recommendations"> 
                <ul> 
                  <li>RECOMMENDED</li> 
                  <li>NEWEST FIRST</li> 
                  <li>POPULAR</li> 
                  <li>PRICE: HIGH TO LOW</li> 
                  <li>PRICE: LOW TO HIGH</li> 
                  </ul> 
                </div> )}
            </div>
          </div>
          <div className="resultDiv">
               {showFilter && (
                 <div className="filters">
                  <div className="filter1">
                    <input type="checkbox"/>
                    <span>CUSTOMIZBLE</span>
                  </div>
                  <div onClick={()=>setShowIdeal(!showIdeal)}  className="filter2">
                    <p onClick={()=>setShowIdeal(!showIdeal)} className='ideal'>IDEAL FOR</p>
                    <p>All</p>
                    {showIdeal && (
                      <>
                      <div className="filter1">
                        <input type="checkbox"/>
                        <span>MEN</span>
                      </div>
                      <div className="filter1">
                        <input type="checkbox"/>
                        <span>WOMEN</span>
                      </div>
                      <div className="filter1">
                      <input type="checkbox"/>
                      <span>Baby & Kids</span>
                      </div>
                      </>
                    )
                    }
                  </div>
                  <div className="filter2">
                    <p className='ideal'>OCCASION</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>WORK</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>FABRIC</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>SEGMENT</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>SUITABLE FOR</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>RAW MATERIALS</p>
                    <p>All</p>
                  </div>
                  <div className="filter2">
                    <p className='ideal'>PATTERN</p>
                    <p>All</p>
                  </div>
                 </div>
               )}
             <div className={`productsDiv ${showFilter ? 'three-columns' : 'four-columns'}`}>
                { products.map((product)=>(
                  <div key={product.id} className="product">
                        <img src={product.image} alt={product.title}/>
                        <p>{product.title}</p>
                        <span className='underline-style'>Sign in </span>
                        <span>or Create an account to see pricing</span>
                  </div>
                ))} 
             </div>
          </div>
          <footer>
          <div className="footer">
            <div className="container1">
            <div className="box1">
              <p>BE THE FIRST TO KNOW</p>
              <p style={{color:"grey", fontSize:"14px"}}>Sign up for updates from metta muse</p>
              <div className="subscribeDiv">
                <input type='text' placeholder='Email your e-mail'/>
                <button>SUBSCRIBE</button>
              </div>
            </div>
            <div className="box2">
              <h3>CONTACT US</h3>
              <p>+91 7032344155</p>
              <p>shivaprasadgade0773@gmail.com</p>
              <h3>CURRENCY</h3>
              <h3>IND</h3>
              <p style={{color:"gray"}}> Transactions will be completed in Rupees and a currency reference is available on hover</p>
            </div>
            </div>
            <vr className="line"/>
            <div className="container2">
                <div className="box3">
                   <h3>metta muse</h3>
                   <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliances Docs</p>
                </div>
                <div className="box3">
                   <h3>QUICK LENS</h3>
                   <p>Orders & Shipping</p>
                   <p>Join/Login as a Seller</p>
                   <p>Payment & Pricing</p>
                   <p>Return & Refunds</p>
                   <p>FAQs</p>
                   <p>Privacy Policy</p>
                   <p>Terms & Conditions</p>
                </div>
                <div className="box5">
                    <div className="follow">
                      <h3>FOLLOW US</h3>
                      <div className="icons">
                      <FontAwesomeIcon icon={faInstagram} style={{color:'white', fontSize:"30px"}}/>
                      <FontAwesomeIcon icon={faLinkedin} style={{color:'white', fontSize:"30px"}}/>
                      </div>
                    </div>
                    <div className="box6">
                      <h3>metta muse ACCEPTS</h3>
                      <div className="icons">
                      <FontAwesomeIcon icon={faGooglePay} style={{color:'white', fontSize:"30px"}}/>
                      <FontAwesomeIcon icon={faCcMastercard} style={{color:'white', fontSize:"30px"}}/>
                      <FontAwesomeIcon icon={faCcPaypal} style={{color:'white', fontSize:"30px"}}/>
                      <FontAwesomeIcon icon={faCcAmex} style={{color:'white', fontSize:"30px"}}/>
                      <FontAwesomeIcon icon={faApplePay} style={{color:'white', fontSize:"30px"}}/>

                      </div>
                      
                    </div>
                </div>

            </div>

          </div>

          </footer>
          
        </>
    )
}

export default Header;