import { createUserWithEmailAndPassword } from 'firebase/auth';
import React , {useState}from 'react'
import auth from '../firebaseConfig';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signin = (e) => {
        //todo
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            
            console.log("success")
        }
        ).catch((error) => {
            console.log('{error}')

        })

    }


  return (
    <div>
        <h1 className='text-lg'>Log IN</h1>
        <form onSubmit={signin}>

            <div className='p-2 '>
                
                <label htmlFor="email">email</label>
                <input type= {'email'} placeholder = 'Enter your name' value={email} onChange = {(e) => setemail(e.target.value)}/>


                

            </div >

            <div className='p-2 block'>
                 <label htmlFor="password">password</label>

                <input type = { 'password'} placeholder = 'Enter your password' value={password} onChange = {(e) => setpassword(e.target.value)}/>

                <button type='submit'>Log IN</button>
            </div>

        
        </form>
    </div>
  )
}

export default Login
