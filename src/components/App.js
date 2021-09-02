import React, { useState, useEffect } from 'react'

/*
Create an App component from scratch
Use the useEffect hook in the App component. Inside the callback for useEffect, send a fetch request to https://dog.ceo/api/breeds/image/random, a free API that returns a random image of a dog.
Display a <p> tag with the text of "Loading..." when the component is first rendered
After receiving a response from the API, show the dog image in an <img> tag, with the alt attribute set to "A Random Dog".
*/

function App() {
  const [img, setImage] = useState('')
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(r => r.json())
    .then(({message}) => {
      setImage(message)
      setLoading(loading => !loading)
    })
  }, [])
  
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <img src={img} alt='A Random Dog'/>
    </div>
  )
}

export default App