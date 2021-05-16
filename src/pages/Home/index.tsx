import React from 'react'
import cn from 'classnames'
import s from './Home.module.scss'

import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Button from '../../components/Button'

const HomePage = () => {
  // @ts-ignore
  return (
    <div className={cn(s.root)}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Button>Button</Button>
        </div>
      </Layout>
    </div>
  )
}

export default HomePage
