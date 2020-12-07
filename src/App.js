
import './App.css';
import imageInSrc from "./imageInSrc.jpg"
import "./style.css";

function App() {
  return (
<div classname="App">
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Derouiche Aymen</h1>
    <br />
    <div className="immag">
    <img src={imageInSrc} alt='image1' width='40%'/>
    <br />
    <img src="/imageInPublic.jpg" alt='image2' width='40%'/>
    </div>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</div>

  );
}

export default App;
