
import { Link } from "react-router-dom"
const About = () => {
  return (
    
    <div className='about'>
      <div className='pic-me'>
        <div>
            
      <p>Hi! Welcome to my Portfolio, Im Emily.</p>
      <h5>Emily Segundo | Software Engineer</h5>
      <h6>My Journey Into loving Software engineer started when I was a little girl. Coding games in the computer lab sparked an interest that i carried for years, though at times I felt I fell short of pursuing that dream. Now, after years of self-doubt, I decided to dive into this amazing world. The ability to harness my creativity, challenge myself with innovative solutions, and constantly thirst for knowledge are all aspects I find essential in a career, and I'm fortunate to have found them in software engineering. I truly enjoy the process of building and continually learning new things, and I cant wait to keep gaining more knowledge.</h6>
      <h6>other things about me: <br/> I am a big hobby person, name any art or craft, I love. My second passion is pottery, (Hence my "Glaze Cookbook" app) although an expensive craft, like in coding, very fullfilling building something from scratch and calling it yours!</h6>
        </div>
      <img className='me' src="https://i.imgur.com/DMWQYjU.png" alt="Picture of Emily Segundo" />
      </div>
      <Link to='/projects'>
    <button className='back-button'>P R O J E C T S</button>
    </Link>
      <Link to='/contact'>
    <button className='next-button'>C O N T A C T</button>
    </Link>
    </div>
  )
}

export default About
