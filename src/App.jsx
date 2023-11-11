import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
// import Productoverview from './components/Productoverview'
function App() {
  const [count, setCount] = useState(0)
  let myObj ={ username: "hitesh", age:21}
  return (
    <>
      <Navbar />
      <h1 className='bg-violet-400 text-white p-3 mb-8 '>Prismatic Primates Collection</h1>
        <Card username="Rainbow Chimp" btnText="Buy Now" imgSrc="https://blockgeeks.com/wp-content/uploads/2022/10/image5-1.png" text="Rainbow Chimp swings through the emerald canopies, a kaleidoscope of hues trailing in its wake. With a heart as vibrant as its multi-colored fur, this whimsical primate dances among the branches."/>
        <Card username="Gold Gorillionaire" btnText="Buy Now" imgSrc="https://i.pinimg.com/736x/b1/b3/27/b1b327c4fb6945c9b828ea665a9e96d7.jpg" text="Dressed in opulent splendor, the gold gorillionaire reigns as the wealthiest primate in the lush canopy, adorned with golden elegance."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
        <Card username="Captain Chimp" btnText="Buy Now" imgSrc="https://images.wsj.net/im-491405?width=1280&size=1.33333333" text=" Guiding through the treetop seas, Captain Chimp leads with a steady hand and a heart full of adventure, navigating the jungle waves with flair and bravery."/>
    
    </>
  )
}

export default App
