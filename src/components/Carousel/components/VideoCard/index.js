import React from 'react';
import { VideoCardContainer } from './styles';

/*function getImageTitle(imageSrc) {
  return imageSrc.replace(
    /^.*github.com\//,
    "",
  ).replace(
    /\#.*$/,
    ""
  ).replace(
    /\//,
    "\-"
  );

}*/


function VideoCard({ repoTitle, url, logo, categoryColor }) {
  const screenshots = require.context('../../../../assets/img/logos/',true);
  const image = screenshots(`./${logo}.png`);
  
  return (
    <VideoCardContainer
      url={image}
      href={url}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={repoTitle}
      text = {repoTitle}
    />
  );
}

export default VideoCard;
