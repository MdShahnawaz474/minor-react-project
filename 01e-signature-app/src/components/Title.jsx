import React from 'react'

const Title = ({classes,text}) => {
  return (
    <div>
        <h1 className={ !classes ?'Title text-center' : classes}>{!text? "Title":text}</h1>
    </div>
  )
}

export default Title