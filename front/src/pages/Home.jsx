import React from 'react';
import Products from '../components/Products';
import Banner from '../components/Banner';
import Recomend from '../components/Recomend';
import Sort from '../components/Sort';
import Search from '../components/Search';

export default function Home() {
  return <section>
    <Banner></Banner>
    <Sort></Sort>
    <Search></Search>
    <Recomend></Recomend>
    
  </section>;
}
