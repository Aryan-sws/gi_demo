import  React, {useEffect} from 'react'
import LandingLayout from '../../Layout/LandingLayout'

const HomePage = () => {
  useEffect(() => {
    console.log('First');
  }, [])
  useEffect(() => {
    console.log('Second');
  }, [])
  return (
   <>
   <LandingLayout>
    <h1>Home Page Body </h1>
   </LandingLayout>
   </>
  )
}

export default HomePage