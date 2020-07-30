import React from 'react';

const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16
    }
  
    return (
     
      <footer className="page-footer font-small blue">

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <em> Bloglist app, Department of Computer Science, University of Helsinki 2019</em>
          <a href="https://mdbootstrap.com/"> mosoftsolutions.com</a>
        </div>
  
      </footer>

    )
  }


  export default Footer;