import './Home.css';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

const Home = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/about');
  };

  return (
    <div className='HomeContainer'>
      <h1 className='homeHeading'>Welcome to My Portfolio</h1>
      <p className='homeIntro'>
        I’m a Trainer with over 9 years of experience in the software industry. I specialize in delivering
        high-quality training programs, guiding teams through complex projects, and ensuring upskilling in cutting-edge
        technologies. My expertise spans across software development, training solutions, and hands-on mentorship for
        both corporate and academic sectors.
      </p>
      <button className='knowMore' onClick={handleKnowMoreClick}>
        Know More
      </button>
    </div>
  );
};

export default Home;
