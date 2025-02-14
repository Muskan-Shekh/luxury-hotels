import DefaultLayout from '@component/components/dashLayout/DefaultLayout'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
    <DefaultLayout children={children}/>
    {/* {children} */}
    </>
    
  )
}

export default layout