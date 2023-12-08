import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function MchlSbl() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl2, setImageUrl2] = useState('');


    const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const fetchImage = async () => {
    setIsLoading(true);
    setImageUrl('blah')
    // Replace with your API endpoint
    const response = await fetch('https://haifrands-backend.onrender.com/mchlsbl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "inputs":prompt }),
    });
    console.log("Got response")
    console.log(response)
    const data = await response.json();
    console.log(data)
      console.log(data[0])
      console.log(data[1])
      setImageUrl(data[0]);
      setImageUrl2(data[1]);
    // setImageUrl(data.imageUrl);
    setIsLoading(false);
  };

  return (
      <div>
        <p>Michael Seibel GenAI</p>
        <p>Make sure you put "mchlsbl" in your prompt (that's the keyword!). For example, "photo of mchlsbl with a chefs hat"</p>
        <p>Here's an example: "photo of mchlsbl as a pokemon trainer, wearing ash ketchum outfit, pokemon in background"</p>

        <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter image prompt"
        />
        <button onClick={fetchImage}>Get Image</button>
          { imageUrl == '' && !isLoading ? (
              <div></div>
          ) : (
              isLoading ? (
                  <div>Loading... Can take up to 5 minutes. Normally takes ~1 minute.</div> // Replace with a spinner component if you have one
              ) : (
                  <div>
                      <div><img height={512} width={512} src={imageUrl} /></div>
                      <div><img height={512} width={512} src={imageUrl2} /></div>
                  </div>
              )
          )
          }

      </div>
  );
}

export default MchlSbl;
