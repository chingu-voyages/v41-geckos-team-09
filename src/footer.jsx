import React from 'react';
import './footer.css'

const Footer = () => {
    return (
<footer className ="dFlex">
            <h4>Travel2it is coded by 
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/sara-baqla/' title="Sara, a linkedin.com link"> Sara
                </a>, 
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/iankorpi/' title="Sara, a linkedin.com link"> Ian
                </a>, Thomas, and
                <a className="custom-link" target="_blank" href='https://www.linkedin.com/in/isabel-klint/' title="Isabel, a linkedin.com link"> Isabel
                </a>. See our project on
                <a className="custom-link" target="_blank" href='https://github.com/chingu-voyages/v41-geckos-team-09' title="Github link"> Github.
                </a>
            </h4>
</footer>
    );
  };
  export default Footer;
