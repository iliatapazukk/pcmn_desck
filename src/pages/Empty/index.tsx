import React from 'react'
import Heading from '../../components/Heading'

interface props {
  title?: string
}

const EmptyPage: React.FC<props> = ({ title }) => {
  return (
    <>
      <Heading type="h1">Empty page for {title}</Heading>
    </>
  )
}

export default EmptyPage
