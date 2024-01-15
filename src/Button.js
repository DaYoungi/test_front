import './App.css';

function Button({color,size,name, click, msg}){

    return(
        <>
            <button onClick={()=>click(msg)} style={{backgroundColor:color, fontSize:size}}>{name}</button>
        </>
    )
}



export default Button 