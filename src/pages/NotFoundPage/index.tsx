import React from 'react'
import { navigate } from 'hookrouter'
import s from './NotFoundPage.module.scss'

import RocketTrio from './assets/rocket_trio.png'
import RocketTrioRetina from './assets/rocket_trio@2x.png'
import FourOfour from './assets/404.png'
import FourOfourRetina from './assets/404@2x.png'

import Heading from '../../components/Heading'
import Button from '../../components/Button'

const handleClick = () => {
  navigate('/')
}

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.fourOfour}>
        <img src={FourOfour} srcSet={`${FourOfour}, ${FourOfourRetina} 2x`} alt="404" />
      </div>
      <div className={s.rockets}>
        <img src={RocketTrio} srcSet={`${RocketTrio}, ${RocketTrioRetina} 2x`} alt="NotFoundPage page" />
        <div>
          <Heading type="h2" isInvert isInline>
            The rocket team
          </Heading>
          <Heading type="h2" isInline>
            has won this time.
          </Heading>
        </div>
        <Button onClick={handleClick} isSecondary isCenterd>
          Return
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
