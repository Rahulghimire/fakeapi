import React,{useState,useEffect} from "react";
import "./App.css";

function App() {
const [fake,setFake]=useState([]);
useEffect(()=>{
  fakestore();
},[])
const fakestore = async()=>{
  const response= await fetch("https://fakestoreapi.com/products");
  const jsondata=await response.json();
  setFake(jsondata);
}
  return(
  <>
    <h2>Welcome to Fake Store</h2>
    <div className="container">
      {fake.map((values)=>{
        return(
        <>
        <div className="box">
        <div className="content">
          <h3>{values.title}</h3>
          <p>{values.description}</p>
        </div>
        <img src={values.image}/>
        <div className="border">
        <h5>More Details...</h5>
        </div>
      </div>
      </>
        )
      })}
    </div>
    </>
  )
}
export default App;
