import React from 'react';
import './footer.css'

const Footer = () => {
    return (
<footer className ="footerContainer">
            <h4>Travel2it is coded by 
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/sara-baqla/' title="Sara, a linkedin.com link"> Sara
                </a>, Ian, 
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/thomas-ruppeiner-201880170/' title="Thomas, a linkedin.com link"> Thomas
                </a>, and
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/isabel-klint/' title="Isabel, a linkedin.com link"> Isabel
                </a>. See our project on
                <a className="custom-link" target="_blank" href='https://github.com/chingu-voyages/v41-geckos-team-09' title="the Travel 2 It Github link"> Github.
                </a>
            </h4>
</footer>
    );
  };
  export default Footer;
