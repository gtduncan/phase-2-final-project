// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// //import {faFacebook} from '@fortawesome/free-brands-svg-icons'

// const Footer = () => {
//     return (
//     <footer className="page-footer font-small cyan darken-3">
//         <div className="container">
//              <div className="row">    
//                 <div class="col-md-12 py-5">
//                     <div className="mb-5 flex-center">    
//                         <a className="tw-ic">
//                             <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//                         </a>
                        
//                         <a className="gplus-ic">
//                             <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//                         </a>
                        
//                         <a className="li-ic">
//                             <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//                         </a>
                       
//                         <a className="ins-ic">
//                             <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//                         </a>
                        
//                         <a className="pin-ic">
//                             <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
//                         </a>
//                     </div>
//                  </div>
//             </div>
//         </div>
       

       
//         <div class="footer-copyright text-center py-3">© 2020 Copyright: 
//             <a href="/">Apartment Hunter </a>      
//             </div>
    

//     </footer>)
// }
// export default Footer


import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';

 const Footer = () => {
return (
        <CDBFooter className="shadow">
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                    
                        <span className="ml-4 h5 mb-0 font-weight-bold">Apartment Hunter</span>
                    </a>
                    <small className="ml-2">&copy; Devwares, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
        </CDBFooter>
    );
};
export default Footer