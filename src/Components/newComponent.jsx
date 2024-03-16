

const HomePage = (props)=>{
    const {name } = props
    return(
        <>
        
        
        <h1>{name}</h1>
        
        <div style={{padding:"20px"}}>
        <h1>This is homepage</h1>
        <p>Card 1</p>
        <p>Card 2</p>
        <p>Card 3</p>
        </div>
        
        </>

    );
}
export default HomePage;