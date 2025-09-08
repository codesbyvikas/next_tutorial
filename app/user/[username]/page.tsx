const SingleProfile = async (props:any) => {
   

    const userName =  await props.params;
     console.log(userName);
    return <h1>Dynamic {userName.username}</h1>
}

export default SingleProfile;