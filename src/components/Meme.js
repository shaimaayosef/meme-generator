import React from 'react'
import {memesData} from "../memesData.js"

const Meme = () => {
  const [memeImages,setMemeImages]= React.useState("")
  function getMemeImages(){
    const memesArray = memesData.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    setMemeImages(memesArray[randomNum].url)
  }
  const [inputs, setInputs] = React.useState({});
    const onChange = (event) => {
        if(event.target.value !== 0){
            
            setInputs((prevState)=> ({...prevState, [event.target.name] : event.target.value}))
        }
    }
  return (
    <main>
        <div className='form'>
            <input type="text" className='form-input' placeholder='Top text' name='input1' value={inputs.input1} onChange={onChange}/>
            <input type="text" className='form-input' placeholder='Bottom text' name='input2' value={inputs.input2} onChange={onChange}/>
            <button className='form-button' onClick={getMemeImages}> Get a new meme image </button>
        </div>
        <div className='memes'>
        <img src={memeImages} className="memes-images"/>
        <p className='p1'>{inputs.input1}</p>
        <p className='p2'>{inputs.input2}</p>
        </div>
    </main>
  )
}

export default Meme
