import React, { useState } from "react";
import "./style.css";


function App() {
 
 const Images = [
"https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg",
"https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
"https://i.pinimg.com/736x/a8/ba/f4/a8baf4b438b17e9cbf93101be13d56f8.jpg",
"https://images.unsplash.com/photo-1566208541068-ffdb5471e9bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBmbG93ZXJzfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.pexels.com/photos/2567011/pexels-photo-2567011.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400",
"https://i.pinimg.com/236x/a4/fb/ce/a4fbce9c9e9e1273522587b6cd49d0d0.jpg"
];
 const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="imgcontainer">

          {Images.map((img, index) => (
            <img key={index} src={img} alt="flower" onClick={()=>{setSelectedImg(img)}}></img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
