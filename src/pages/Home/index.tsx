import React from 'react'
import cn from 'classnames'
import s from './Home.module.scss'

import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Parallax from '../../components/Parallax'

const HomePage = () => {
  return (
    <div className={cn(s.root)}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Button>Button</Button>
          <Button secondary>Button secondary</Button>
          <Button secondary wide>
            Button wide
          </Button>
        </div>
        <Parallax />
      </Layout>
    </div>
  )
}

export default HomePage
