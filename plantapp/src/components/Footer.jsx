import React from 'react'
import Logo from '../Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
// const Footer = () => {
//     return (

export const Footer = () => {
  return (
    <body className='bg-transparent'>
    <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-3 static inset-x-0 bottom-0">
    <div className="col flex justify-center">
    <a href="/" className="d-flex align-items-center ">
        <img className ='  max-h-36' src={Logo}/>      
    </a>
      
    </div>

    <div className="col">
    
    </div>

    <div className="col">
      <h5>Resources</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Using Bloom</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Documents</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Support</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">FAQs</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Company</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">About Us</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Blog</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Creators</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Careers</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Contact Us</a></li>
      </ul>
    </div>

    <div className="col">
      <h5>Social</h5>
      <ul className="nav flex-column">
      <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Twitter</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Instagram</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Twitter</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">Facebook</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary link-success">TikTok</a></li>
      </ul>
    </div>
  </footer>
  </body>
  );
};



        // <footer>
        //     <img src={Logo} className='w-20 ml-10 flex '/>
        //     <span>
        //         Made by DMS ❤️
        //     </span>
        // </footer>
//     )
// }

export default Footer