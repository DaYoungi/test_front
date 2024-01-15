
import Button from './Button'


function Success({contents,gotoLogin}) {



    return(
        <div className="center">
            <div>{contents}</div>
            <Button color="orange" name={"Back"} click={gotoLogin}/>
  
        </div>
    )
}

export default Success