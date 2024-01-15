import Button from './Button'
import { useRef } from 'react';



function Login({click, errMsg}){


    const input_ref = useRef("")


    return(
        <>
            <div className='center'>
                <div>{errMsg}</div>
                <div><input ref={input_ref}></input></div>
                <Button color="orange" name="Login" click={()=>click(input_ref.current.value)}/>
            </div>
        </>
    )
}

export default Login