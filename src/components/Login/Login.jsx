import React,{ useState }  from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [user, setUser] = useState({
    'email' : '',
    'password' : '',
  });


  let getInputValue = (e) => {
    let myUser = {...user}
    myUser[e.target.name]= e.target.value
    setUser(myUser)
    console.log(myUser);
  }

  let navigate = useNavigate()
  let navigateForm = () => {
    navigate('/home')
  }
  



  return (
    <div className=' mt-3  pt-5 w-75 m-auto'>
    <h1>Login form</h1>

    <form action="" className='' onSubmit={navigateForm} >
      <label  htmlFor="email">email :</label>
      <input type="email" className='form-control mb-3' name='email' id='email' onChange={getInputValue}  />
      <label  htmlFor="password">password :</label>
      <input type="password" className='form-control mb-3' name='password' id='password'  onChange={getInputValue} />


      <button className='btn btn-info float-end'>Register</button>
      <div className="clearfix"></div>


    </form>
  </div>

  )
}
