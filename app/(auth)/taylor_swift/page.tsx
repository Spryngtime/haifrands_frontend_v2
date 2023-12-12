'use client'


import Link from 'next/link'
import {useCallback, useState} from "react";
import {useStytchUser} from "@stytch/nextjs";
import {useModal} from "@ebay/nice-modal-react";
import UserInfoModal from "@/components/ui/SignupModal";
import {generateImage} from "@/components/utils/backendAPIHelper";

export default function Mchlsbl() {
    const [prompt, setPrompt] = useState('');
    const [imageUrl, setImageUrl] = useState('https://i.imgur.com/cubstjn.png');
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl2, setImageUrl2] = useState('https://i.imgur.com/KxTY5Cq.png');
    const { user, isInitialized } = useStytchUser();
    const userModal = useModal(UserInfoModal);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrompt(event.target.value);
    };

    const handleNewUser = useCallback(() => {
        console.log("handleNewUser")
        userModal.show().then((newUser) => {
            console.log("handleNewUser2")
        });
    }, [userModal]);

    const fetchImage = async () => {
        if (!isInitialized || !user) {
            console.log("Need to login")
            handleNewUser()
            return
        }
        setIsLoading(true);
        // setImageUrl('blah')
        const response = await generateImage(prompt)
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
        <section className="bg-gradient-to-b from-gray-100 to-white top-text">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 top-text">
                <div className="top-text">
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-6">
                        <h1 className="h1">Taylor Swift GenAI</h1>
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

                    <div className="max-w-screen-lg mx-auto p-1">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <p>Make sure you put "taylor swift" in your prompt (that's the keyword!). For example, "photo
                                    of taylor swift with a chefs hat"</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-screen-lg mx-auto p-1">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full px-3">
                                <p>Here's an example: "photo of taylor swift as a pokemon trainer, wearing ash ketchum
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
