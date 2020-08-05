import React from 'react';
import { VideoCardGroupContainer, VideoCardList, Title, ExtraLink, ExtraDiv } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const repos = category.repos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <ExtraDiv>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </ExtraDiv>
      )}
      <Slider>
        {repos.map((repo, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={repo.titulo}>
              <VideoCard
                repoTitle={repo.titulo}
                url={repo.url}
                logo = {repo.logo}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
