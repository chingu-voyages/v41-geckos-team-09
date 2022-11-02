import React, { Component } from "react";
// import { Passers } from "prop-passer";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
 
  EmailIcon,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

import './share.css'

class Share extends Component {

  render() {

    const {
      url = String(window.location),
      title = "Steadylearner Website",
      shareImage = "https://www.steadylearner.com/static/images/brand/prop-passer.png",
      size = "2.5rem",
    } = this.props;

    const ShareList = Passers({
      url,
      className: "network__share-button",
    })({
      className: "network cursor-pointer hover transition--default",
      title: `Share ${String(window.location)}`,
    })("li");

    return (
        <ShareList>
        <EmailShareButton
            quote={title}
          >
            <EmailIcon
              size={size}
            />
          </EmailShareButton>

          <FacebookShareButton
            quote={title}
          >
            <FacebookIcon
              size={size}
            />
          </FacebookShareButton>

        
          <WhatsappShareButton
            title={title}
            separator=":: "
          >
            <WhatsappIcon size={size} />
          </WhatsappShareButton>


        </ShareList>
    );
  }
}

export default Share;

