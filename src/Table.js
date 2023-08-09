import React,{useEffect,useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
// import Login from './Login';

const Table = () => {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then((result) => {console.log(result); setUserData(result)});
}, []);

  return (
    <div className='container mt-5'>
    {/* <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="C:\Users\pragati\Desktop\rating\rate\login\src\Login.js" element ={<Login/>}></Route>
        </Routes>
    </BrowserRouter> */}
    <h1> Employee details</h1>  
    <table className='table table-dark table-striped'>
    <thead>
    <tr>
     <th>userId</th>
    <th>title</th>
     </tr>
     </thead> 
     <tbody>
        {
           userData && userData.map(({id,userId,title})=>(
            <tr>  
            <td key={id}>{userId} </td>
            <td key={id}>{title} </td>
            </tr>
           )) 
        }
     </tbody>
     </table>
    </div>
  );
};

export default Table 