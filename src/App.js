import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Splash from './Components/Splash';
import ProjectPreviews from './Components/ProjectPreviews';
import Contact from './Components/Contact';
import ProjectSlide from './Components/ProjectSlide';
import Footer from './Components/Footer';
import data from './BlogData/Blog.json';





function App() {
  return (
    <div>      
      <div>      
        <Navbar></Navbar>
      </div>
      <div>    
        <Splash></Splash>
      </div>
      <div>
        <ProjectSlide></ProjectSlide>
      </div>
      <div>
        <ProjectPreviews></ProjectPreviews>
      </div>
      <div>
        <Contact></Contact>
      </div>        
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
