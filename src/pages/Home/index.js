import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Default from '../../templates/default';

function Home() {
  return (
    <Default className="App">
      <BannerMain 
      repoTitle = "sindresorhus/awesome"
      repoDescription = {"An awesome list is a list of awesome things curated by the community. There are awesome lists about everything from CLI applications to fantasy books. The main repository serves as a curated list of awesome lists."}
      url="https://github.com/sindresorhus/awesome#readme"
      />

      <Carousel 
      ignoreFirstVideo
      category ={dadosIniciais.categorias[0]}
      />
    </Default>
  );
}

export default Home;
