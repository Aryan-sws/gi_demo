import  React, {useEffect, useLayoutEffect, useState} from 'react'
import LandingLayout from '../../Layout/LandingLayout'

const HomePage = () => {
  const [num, setNum] = useState();
  useEffect(() => {
    if(num===0)setNum(5 + Math.random() * 50)

    
  }, [num])
 
  return (
   <>
   <LandingLayout>
    <h1>{num}</h1>
    <button onClick={()=>setNum(0)}> onClick</button>
   </LandingLayout>
   </>
  )
}

export default HomePage