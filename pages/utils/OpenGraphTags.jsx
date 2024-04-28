import React from "react";
const OpenGraphTags = () => {
  return <React.Fragment>
      <meta property="og:url" content="https://www.itpromax.com" />
      {/* thumbnail And title for social media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ITPROMAX" />
      <meta property="og:description" content="ITPROMAX" />
      <meta property="og:image" content="/icon.png" />
    </React.Fragment>;
};
export default OpenGraphTags;