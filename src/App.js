import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Button'
import Login from './Login';
import Success from './Success';

function App() {

    const [success, setSucces] = useState(false)
    const [contents, setContents] = useState("")
    const [errMsg, setErrMsg] = useState("")
    
    function handleLogin(contents){



      if(contents==""){
        setErrMsg("id를 입력해주세요!!!")
      }else{
        fetch('https://test-server-s0ip.onrender.com/login/'+contents)
        .then(res=>res.json())
        .then(data=>{

          if(data.msg!=""){        
          setSucces(true)
          setContents(data.msg)
        }else{
          setErrMsg("일치하는 id가 없습니다!!")
        }
        })
      }
    }

    function gotoLogin(){
      setSucces(false)
      setErrMsg("")
    }

    return (   
    <>

      {!success ?
        <Login errMsg={errMsg} click = {handleLogin}/>: <Success contents={contents} gotoLogin={gotoLogin}/>      
      }
      </>
  );
}

export default App;