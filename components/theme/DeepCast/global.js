import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    // position: relative;

    // FOLLOWING IS A MUST FOR FLEX FIXED FOOTER TO WORK
    height: 100%; 
  }  
  html {
    scroll-behavior: smooth;
    @media screen and (max-width: 991px) {
    	margin-top: 65px;
    }
  }
  body {

    // H1 SIZE FIX FOR MOBILE DEVICES
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 2rem !important;
      }
    }
    
    // FOR A BOOTSTRAP BUGFIX
    line-height: 0;
    
    // FOR REMOVING ROUNDED CORNERS GLOBALLY 
    input, button {
      border-radius: 0px !important;
    }

    // FOR HTML VIDEO
    // video::-webkit-media-controls-overlay-play-button {
    //   display: none;
    // }
    // *::-webkit-media-controls-start-playback-button {
    //   display: none!important;
    //   -webkit-appearance: none;
    // }
  }



  #__next {
    // FOR SIDE BAR NAV TO WORK
    @media screen and (min-width: 992px) {

      // MUST FOR FIXED FOOTER
      height: 100% !important; 
      
      display: flex;
      flex-direction: row;
      align-items: stretch;
    }
  }
  
  #main-content-right {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    // MUST FOR THE SITE TO HAVE FULL SCREEN WIDTH
    flex-grow: 1; 
  }

  main {
    // MUST FOR FIXED FOOTER
    flex-grow: 1; 
	}

	main,
	footer {
		flex-shrink: 0;
  }

	

  
  h1, h2, h3, h4, h5, h6 {
    //BOOTSTRAP 4 BUGFIX
    margin-bottom: 0; 
    padding-bottom: 1rem;
  }

  body.fontLoaded {
    font-family: Arial;
  }

  #app {
    background-color: white;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

// NAV BAR STYLES [DESKTOP NAV]

  #main-navigation {
    position: relative;
    width: 308px;

    .navbar {
      position: fixed;
      top: 0;
    }
    .desktop-nav-divider {
      position: fixed;
      top: 400px;
      width: 307px;
      z-index: -1;
    }
    .nav-contact-box {
      position: fixed;
      top: 410px;
      padding-left: 3rem;

      .active {
        color: dodgerblue !important;
      }
      
      .lang-links {
        margin-top: 1.75rem;

        a {
          padding-right: 1rem;
        }
      }
      .text {
        margin-top: 3rem;
  
        .address {
          margin-top: 1rem;
        }
      }
      .buttons {
        margin-top: 1rem;
        .btn {
          margin-bottom: .5rem;
          width: 150px;
          background-color: transparent;
          color: #A8A8A8;
          font-weight: 300;
          border-radius: 0;
        }
        .btn.active {
          border: 1px solid dodgerblue;
        }
      }
    }

  }

  

// HOME PAGE STYLES

  .home-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }

  .home-video-section {
    border-left: 1px solid #e3e3e3;

    .home-video-block {
      @media screen and (min-width: 1600px) {
        padding-top: 8rem !important;
        padding-bottom: 8rem !important;
      }
    }
    .home-video-text-block {
      @media screen and (min-width: 1700px) {
        padding: 4rem !important;
      }
    }
  }

  .home-exploration-section {
    border-left: 1px solid #e3e3e3;

    img {
      margin-top: -5rem;
    }
  }

  .home-partners-section {
    border-left: 1px solid #e3e3e3;

    .headline-block {
      @media screen and (min-width: 700px) {
        padding: 0 5rem;
      }
      @media screen and (min-width: 1300px) {
        padding: 0 12rem;
      }
      @media screen and (min-width: 1600px) {
        padding: 0 20rem;
      }
      @media screen and (min-width: 1800px) {
        padding: 0 25rem;
      }
    }
    img {
      width: 95px !important;
    }
  }

  .home-subscription-section {
    border-left: 1px solid #e3e3e3;
    
    form {
      @media screen and (min-width: 350px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
        }
      }
      @media (min-width: 481px) and (max-width: 575px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
          margin-top: -.5rem;
        }
      }
      @media (min-width: 769px) and (max-width: 1254px) {
        .submit-btn {
          margin-top: .5rem;
        }
      }
    }
  }


// PRODUCT PAGES STYLES

  .product-hero {

    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 80%;
      }
      .hero-block-2 {
        display: none;
      }
    }
    @media screen and (max-width: 640px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
    }
    @media screen and (max-width: 350px) {
      .hero-block-1 {
        padding-top: 3rem;
      }
    }
  }

  // DATA INTEGRATION PAGE


  // FIELD EVALUATION PAGE

  // FIELD DEVELOPMENT PAGE

  .field-dev-modeling-section {
    border-left: 1px solid #e3e3e3;

  }
  .field-dev-physics-section {
    border-left: 1px solid #e3e3e3;

  }

// SOLUTIONS PAGE STYLES

  .solutions-hero {
    @media screen and (max-width: 991px) {
      display: flex;

      .hero-block-1 {
        flex-basis: 100%;
      }
    }
    @media screen and (max-width: 700px) {
      display: block;
      min-height: 40rem;

      .hero-block-1 {
        padding-top: 5rem;
      }
      
    }
    .hero-block-1 {

      @media screen and (max-width: 350px) {
          padding-top: 3rem;

          // FOR MOBILE ORIENTATION - FAILING SO FAR
          // @media screen and (orientation: landscape) {
          //   border: 2px solid red;
          //   margin-top: -3rem !important;
          // }
          // @media screen and (orientation: portrait) {
          //   border: 2px solid yellow;
          // }
          
      }
     
    }

    

  }
  .solutions-pg-quote-slider {
    .carousel {
      
      .slide {
        background: #f8f9fa;
      }
      .control-arrow {
        // font-size: 2rem;
        // border: 1px solid red;
      }
    }
  }
  .product-price-block {
    button {
      padding: .75rem;
      font-weight: 800;
      min-width: 270px;
    }
  }  

// ABOUT PAGE STYLES  

  .about-hero-section {
    border-left: 1px solid #e3e3e3;

    .about-hero-text {
      @media (min-width: 1351px) and (max-width: 1550px) {
        padding: 1rem;
      }
      @media (max-width: 400px) {
        padding: 1rem;
      }
    }

    .about-hero-slider {
      .carousel {
        .slide {
          background: white;
        }
        .control-dots {
          margin-right: .5rem;
          padding: .5rem;
          .dot {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }

  }

  .about-team-section {
    border-left: 1px solid #e3e3e3;

    img {
      width: 150px !important;
    }
    .about-icon-holder {
      img.about-icon {
        width: 60px !important;
  
        @media (max-width: 1398px) {
          width: 50px !important;
          padding: 0 !important;
        }
  
        @media (max-width: 1248px) {
          width: 45px !important;
          padding: 0 !important;
        }
  
        @media (max-width: 1173px) {
          width: 40px !important;
          padding: 0 !important;
        }
      }
    }
    .member {
        min-width: 165px !important;
        margin: 0 !important;
      .text {
        min-height: 130px;
      }
    }

    @media screen and (min-width: 501px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 769px) {
      .member {
        .text {
          min-height: 150px;
        }
      }
    }

    @media screen and (min-width: 1201px) {
      .member {
        .text {
          min-height: 125px;
        }
      }
    }
  } //team-members ends

  .about-join-us-section {
    border-left: 1px solid #e3e3e3;
    
    form {
      .file-input {
        border: 1px solid red;
        padding: 1rem;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
      .file-input-label {
        padding: .5rem 2rem;
        border: 1px solid lightgray;
      }
      .textarea-input {
        width: 99%
        height: 150px;
        background-color: lightgray;  
      }
      .email-input {
        width: 99%;
        margin-right: 10px;  
        background-color: lightgray;  

        @media (min-width: 1200px) {
          float: left !important;
          width: 75%;
        }
      }
      .submit-btn {
        width: 99%;

        @media (min-width: 1200px) {
          width: 22%;
          float: left;
          margin-top: -1rem;
        }
      }
    }
  }


// MEDIA PAGE STYLES
  
  .media-hero-section {

  }

  .media-posts-section {
  }
  
  .media-pagination {
    display: flex;
    justify-content: center;

    .page-numbers {
      padding: 1rem 1rem 0 1rem;
    }
  }

// FOOTER STYLES

  .footer-content {
    border-left: 1px solid #e3e3e3;

    ul {
      list-style-type: none;
      padding: 0 !important;
    }
    .social-block {
      margin-top: 4.7rem;
    }

    @media screen and (max-width: 450px) {
      text-align: center;
      .social-icons {
        justify-content: center;
      }
    }
    @media screen and (max-width: 768px) {
      .footer-block {
        padding-top: 4rem;
      }
      .social-block {
        margin-top: 0rem;
      }
    }
  }

// OTHER COMPONENTS NOT SPECIFIC TO A PAGE  

  .img-caption {
    margin-left: .5rem;
    margin-top: -.5rem;
    font-size: .8rem;
    font-weight: 600;
  }
  .related-media {
    border-left: 1px solid #e3e3e3;

    .headline {
      padding-bottom: 0;
    }
    .date {
      padding-top: 0;
    }
  }
  .article-single {
    border-left: 1px solid #e3e3e3;
    .headline {
      padding-bottom: 0;
    }
    .date {
      padding-top: 0;
      color: lightgray;
    }
  }

  // GENERAL SUBSCRIPTION FORM

  .general-subscription-section {
    border-left: 1px solid #e3e3e3;
    input {
      background-color: lightgray;  
    }
    form {
      @media screen and (min-width: 350px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
        }
      }
      @media (min-width: 481px) and (max-width: 575px) {
        input {
          width: 300px !important;
        }
        .submit-btn {
          width: 120px;
          margin-top: -.5rem;
        }
      }
      @media (min-width: 769px) and (max-width: 1254px) {
        .submit-btn {
          margin-top: .5rem;
        }
      }
    }
  }

  // MORE INFO FORM SECTION  

  .more-info-form-section {
    border-left: 1px solid #e3e3e3;

    form {
      .file-input {
        border: 1px solid red;
        padding: 1rem;
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }
     
      .textarea-input {
        width: 99%
        height: 150px;
        background-color: lightgray;  
      }
      .email-input {
        width: 99%;
        margin-right: 10px;  
        background-color: lightgray;  

        @media (min-width: 1200px) {
          float: left !important;
          width: 75%;
        }
      }
      .submit-btn {
        width: 99%;

        @media (min-width: 1200px) {
          width: 22%;
          float: left;
          margin-top: -1rem;
        }
      }
    }
  }

  // SPECIAL TEXT & IMAGE SECTION

  .special-text-image-section {
    border-left: 1px solid #e3e3e3;
    @media (min-width: 680px) {
      img {
        display: none;
      }
    } 
  }

`;

export default GlobalStyle;
