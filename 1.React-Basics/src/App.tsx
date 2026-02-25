// import { useState } from 'react'
import './App.css'
import TodoApp from './components/Todo'
import Counter from './components/Counter'
import ProductCard from './components/Product'
import image from "../src/assets/nezoku.png"
import rengoku from "../src/assets/Rengoku-4K.png"
import Accordion from './components/Accordion'
import WeatherApp from './components/Weather'
function App() {
    const faqItems = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building UIs."
    },
    {
      title: "What is TypeScript?",
      content: "TypeScript adds static typing to JavaScript."
    },
    {
      title: "Is this reusable?",
      content: "Yes, very reusable."
    }
  ];


  return (
    <>
      <TodoApp></TodoApp>
      <Counter></Counter>
      <div className='app-product-div'>
      <ProductCard title='Hand drawn Image' price={10000} image={image} ></ProductCard>
      <ProductCard title='Rengoku' price={9999} image={rengoku} ></ProductCard></div>
      <Accordion items={faqItems}></Accordion>
      <WeatherApp></WeatherApp>
    </>
  )
}

export default App
