import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
   

    const [user, setuser] = useState({
        'first_name' :'',
        'last_name' : '',
        'age' : '',
        'email' : '',
        'password' : '', 

    });



    let getEnputValue =(e)=>{
    
        let myUser = {...user};
        myUser[e.target.name] = e.target.value
        setuser(myUser)
        console.log(myUser);


    }

    
    let navigate = useNavigate()

    let goToLogin = (e) =>{
        navigate('/Login')
        e.preventDefault()

    }
    

  return (
    <div className=' mt-3  pt-5 w-75 m-auto'>
      <h1>registeration form</h1>

      <form action="" className='' onSubmit={goToLogin} >
      <label  htmlFor="firstName">firstName :</label>
        <input type="text" className='form-control mb-3' id='firstName' name='first_name' onChange={getEnputValue} />
        <label  htmlFor="lastName">lastName :</label>
        <input type="text" className='form-control mb-3 ' id='lastName'name='last_name'  onChange={getEnputValue}/>
        <label  htmlFor="age">age :</label>
        <input type="number" className='form-control mb-3' id='age'name='age'  onChange={getEnputValue}/>

        <label  htmlFor="email">email :</label>
        <input type="email" className='form-control mb-3' name='email' id='email'  onChange={getEnputValue}/>
        <label  htmlFor="password">password :</label>
        <input type="password" className='form-control mb-3' name='password' id='password'  onChange={getEnputValue}/>


        <button className='btn btn-info float-end'>Register</button>
        <div className="clearfix"></div>


      </form>
    </div>
  )
}
