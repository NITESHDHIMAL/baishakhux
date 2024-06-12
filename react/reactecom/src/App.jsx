import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {


  // let a = 3;
  // let b = 2;

  // arithmetic operator 
  // let c = a + b;
  // let c = a - b;
  // let c = a * b;
  // let c = a / b;
  // let c = a % b;

  // let c = a ** b ;


  // assignment operator 
  //  a += b
  //  a = a + b
  //  a -= b

  // comparision operator 
  // == equal value 
  // === equal value and data type 

  // != not equal 
  // !== not equal and data type 

  // > greater than
  // < less than 
  // >= greater than or equal
  {/* <= less than or equal   */ }

  // console.log(c)


  // if (condition) {
  //   statement 
  // }

  //  if (condition) {
  //   statement 
  // } else {
  //   staement 
  // }


  // if (condition) {
  //   statement
  // } else if {
  //   statement
  // } else if {
  //   statement
  // } else if {
  //   statement
  // } else {
  //   statement 
  // }


  // if ( a == b) {
  // if ( a === b) {
  // if ( a != b) {
  // if ( a !== b) {
  // if ( a > b) {
  // if ( a < b) {
  // if ( a >= b) {
  // if ( a <= b) {
  //   console.log("True")
  // } else {
  //   console.log("False")
  // }



  // if ( a == b && a > b){
  // if ( a == b || a > b){
  //   console.log("True")
  // } else{
  //   console.log("False")
  // }

  // age => 13 - 19 => Teen 
  // age => 20 - 25 => Adult 

  // mark sheet 

  // let marks = 10;

  // if ( marks == 0 || marks < 16 ){
  //   console.log("Need Improvement")
  // } else {
  //   console.log("False")
  // }


  const course = [
    {
      name: "UI/UX",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/UI-ux.webp",
      price: "16k"
    },
    {
      name: "MERN",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Mernstack.webp",
      price: "16k"
    },
    {
      name: "QA",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Quality_Assurance.webp",
      price: "16k"
    },
    {
      name: "Python",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Python_with_Django.webp",
      price: "16k"
    },
    {
      name: "Graphic",
      duration: "2.5 month",
      image: "https://mindrisers.com.np/static/Images/courses/Graphic-Design.webp",
      price: "16k"
    },
  ]


  return (
    <>
      {/* <h2>Arithmetic Operator</h2> */}

      {/* {course?.map((data) => (
        <div class="grid h-screen bg-gray-800 lg:grid-cols-3 justify-center">
          <div></div>
          <div class="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
            <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
              <img class="peer absolute top-0 right-0 h-full w-full object-cover" src={data?.image} alt="product image" />
            </a>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl tracking-tight text-white"> {data?.name}  </h5>
              </a>
              <div class="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-white">${data?.price}</span>
                </p>
              </div>
              <a href="#" class="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart</a
              >
            </div>
          </div>
        </div>
      ))} */}


    <Routes>
      <Route path='/' element= {<Home/>} /> 
      <Route path='/cart' element= {<Cart/>} /> 
    </Routes>
 

    </>

  )
}

export default App