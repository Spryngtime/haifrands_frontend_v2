'use client'


import Link from 'next/link'
import {useState} from "react";

export default function Mchlsbl() {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl2, setImageUrl2] = useState('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };


    const fetchImage = async () => {
        setIsLoading(true);
        setImageUrl('blah')
        // Replace with your API endpoint
        const response = await fetch('https://haifrands-backend.onrender.com/sample', {
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
        <section className="bg-gradient-to-b from-gray-100 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">


                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1">Michael Seibel GenAI</h1>
                    </div>

                    { imageUrl == '' && !isLoading ? (
                        <div></div>
                    ) : (
                        isLoading ? (
                            <div>Loading... Can take up to 5 minutes. Normally takes ~1 minute.</div> // Replace with a spinner component if you have one
                        ) : (
                            <div className="horizontal-container">
                                <div><img height={512} width={512} src={imageUrl} /></div>
                                <p> | </p>
                                <div><img height={512} width={512} src={imageUrl2} /></div>
                            </div>
                        )
                    )
                    }

                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <p>Make sure you put "mchlsbl" in your prompt (that's the keyword!). For example, "photo
                                    of mchlsbl with a chefs hat"</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <p>Here's an example: "photo of mchlsbl as a pokemon trainer, wearing ash ketchum
                                    outfit, pokemon in background"</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <input
                                    className="form-input w-full text-gray-800"
                                    type="text"
                                    value={prompt}
                                    onChange={handleInputChange}
                                    placeholder="Enter image prompt"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <button onClick={fetchImage}
                                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Get Image
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
