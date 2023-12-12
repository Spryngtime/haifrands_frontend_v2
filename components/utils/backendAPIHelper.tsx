let URL_PREFIX = "http://localhost:4000"
if(process.env.NEXT_PUBLIC_PRODUCTION == "prod") {
    URL_PREFIX = "https://haifrands-backend.onrender.com"
}

export const saveNewuser = async () => {
    // Replace with your API endpoint
    console.log("testStytch")
    const response = await fetch(`${URL_PREFIX}/newSignup`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    });
    console.log("Got response")
    console.log(response)
};

export const generateImage = async (prompt : string) => {
    const response = await fetch(`${URL_PREFIX}/generateImage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "inputs":prompt }),
        credentials: 'include'
    });
    console.log("Got response")
    console.log(response)
    return response
};