import React from 'react';
import cn from 'classnames';
import s from './Home.module.scss';

import Header from '../../components/Header'

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header/>
    </div>
  )
}

export default HomePage;
