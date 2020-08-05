import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton, ImageFrame } from './styles';


function getImageTitle(imageSrc) {
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

}

export default function BannerMain({
  repoTitle,
  repoDescription,
  url,
}) {
  const imageSrc = getImageTitle(url)
  //const youTubeID = getYouTubeId(url);
  //const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  //const bgUrl = `../../assets/img/screenshots/${repoTitle}.png`;
  const screenshots = require.context('../../assets/img/screenshots/',true)
  const bgUrl = screenshots(`./${imageSrc}.png`)


  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            {repoTitle}
          </ContentAreaContainer.Title>
          <ContentAreaContainer.Description>
            {repoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <a href={url} target="_blank" rel="noopener noreferrer">
          <ImageFrame>
            <img src={bgUrl} height="300" />
          </ImageFrame>
          </a>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
