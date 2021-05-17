import React from 'react'
import cn from 'classnames'
import s from './Home.module.scss'

import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Parallax from '../../components/Parallax'
import Heading from '../../components/Heading'

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <div>
            <Heading type="h1">
              <b>Find</b> All your favorite <b>Pokemon</b>
            </Heading>
            <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          </div>
          <Button>Button</Button>
          <Button secondary>Button secondary</Button>
          <Button secondary isWide>
            Button wide
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  )
}

export default HomePage
