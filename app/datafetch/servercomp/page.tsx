import { resolve } from "path";

const FetchDataServer = async(props:any) => {

    const searchParams =  await props.searchParams;
    const userName = searchParams.name.trim();

    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
        });

    if(!userName || userName==="") {
        
    return (
        <div className="flex h-screen w-full justify-center items-center">
        <h1 className="text-lg font-semibold text-gray-800">
            Please add a username in the URL
        </h1>
        </div>
    );
    }

    const res = await fetch(`https://api.genderize.io?name=${userName}`);
    const userData = await res.json();

    console.log(userData);

    const confidence = userData.probability*100;
    console.log(confidence);


    return (
        <>
        <h1>name: {userName}</h1>
        <h1>confidence: {confidence}%</h1>
        </>
        
    )

};

export default FetchDataServer;