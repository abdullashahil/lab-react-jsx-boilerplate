import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  let imgData = imageData();

  return(
    <div className='body'>
          <h1>Gallery</h1>
      <div className='maindiv'>

  {imgData.map((obj)=>{
    return(
      <img src={obj.img}/>
    )
  })}
  </div>
  </div>
    
  )
}

export default App;
