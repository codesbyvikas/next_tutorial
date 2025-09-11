const Products = async(props:any) => {
    const searchParams = await  props.searchParams;
    console.log(searchParams);


    return (
        <h1>Search Params: {searchParams.category}</h1>
    )
}

export default Products;