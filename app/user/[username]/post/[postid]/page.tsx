const SinglePost = async (props:any) => {
   

    const userName =  await props.params;
     console.log(userName);
    return <h1>Welcome to {userName.postid} </h1>
}

export default SinglePost;