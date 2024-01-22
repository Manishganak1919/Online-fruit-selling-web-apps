// import logo from './logo.svg';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from "./components/Header"
import React, { useEffect } from "react";
// toast provides the notification
import toast, { Toaster } from 'react-hot-toast'; 
import { setDataProduct } from './redux/productSlide';
// the react-redux library useDispatch and useSelector are commonly used in React applications that utilize Redux for state management.
import { useDispatch, useSelector } from 'react-redux';



function App() {

  const dispatch = useDispatch()
  const productData =  useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json()
     
      dispatch(setDataProduct(resData))
    })()
  },[])




  return (

   <>
   <Toaster/>
 <div >
     <Header/>
     <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
     </main>
    </div>

   </>



   
  );
}

export default App;
