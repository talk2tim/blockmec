import React from 'react';
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return   <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <img src={Logo} alt="Chain App Dev" />
            </a>
            {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="#services">Services</a></li>
              <li className="scroll-to-section"><a href="#about">About</a></li>
              <li className="scroll-to-section"><a href="#pricing">Pricing</a></li>
              <li className="scroll-to-section"><a href="#newsletter">Newsletter</a></li>
              <li><div className="gradient-button"><a id="modal_trigger" href="#modal"><i className="fa fa-sign-in-alt"></i> Sign In Now</a></div></li> 
            </ul>        
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End *****--> */}
          </nav>
        </div>
      </div>
    </div>
 

  {/* //Modal controller here */}
  
    <script src="../../assets/vendor/jquery/jquery.min.js"></script>
    <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../../assets/js/owl-carousel.js"></script>
    <script src="../../assets/js/animation.js"></script>
    <script src="../../assets/js/imagesloaded.js"></script>
    <script src="../../assets/js/popup.js"></script>
    <script src="../../src/assets/js/custom.js"></script>

</header>

};
 
export default Header;