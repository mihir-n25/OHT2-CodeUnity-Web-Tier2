import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ["C" , 'o' , 'd', 'e', 'U', 'n' , 'i' , 't' , 'y']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timeoutId)
    }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass} style={{marginRight : "19px"}}>Hey</span>
            <span className={`${letterClass} _12`} >There,</span>
            <br />
            <span className={`${letterClass} _13`} style={{marginRight : "19px"}}>We</span>
            <span className={`${letterClass} _14`}>Are</span>
            <br/>
                        <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <span className={`${letterClass} _14`} style={{marginRight : "19px"}}>Your</span>
            <span className={`${letterClass} _14`}>Favourite</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2 style={{marginTop : "50px"}}>Full Stack Developer / Android , IOS Developer / Data Analytics</h2>
          <Link to="/contact" className="flat-button" style={{marginTop : "30px"}}>
            CONTACT US
          </Link>
        </div>
        <Logo style = {{marginTop : "10rem"}}/>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home