import React from 'react'
import Heading from '../../components/Heading'
import Header from '../../components/Header'

interface props {
  title?: string
}

const EmptyPage: React.FC<props> = ({ title }) => {
  return (
    <>
      <Header />
      <Heading type="h1">Empty page for {title}</Heading>
    </>
  )
}

export default EmptyPage
