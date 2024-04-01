
import google from '../assets/google.svg';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const BackToHome = () => {
        navigate("/");
      }
      
  return (
    <div className='img'>
        <div className="flex p-7">
            <h1 className="text-2xl text-blue-700 font-bold" onClick={BackToHome}>MeTutor</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex flex-row box'>
                <div className='flex flex-col justify-center items-center m-4'>
                    <h2 className='text-2xl text-white font-semibold mb-1'>Welcome Back</h2>
                    <p className='text-lg text-white mb-4'>Login into your account</p>
                    <input type="text" placeholder='Email' className='border-2 w-96 border-gray-400 rounded-md p-2 m-2' />
                    <input type="password" placeholder='Password' className='border-2 w-96 border-gray-400 rounded-md p-2 m-2' />
                    <button type='submit' className='btn-color hover:bg-blue-500 text-white border-1 w-96 border-gray-400 rounded-md p-2 m-2'>LOG IN</button>
                    <p className='text-sm text-center text-white font-medium'>Don't have an account? <Link to='/register'><span className='font-medium text-blue-700 hover:underline'>Sign up</span></Link></p>
                    <p className='text-center text-white font-medium m-4'>Or continue with</p>
                    
                    <span className='flex justify-center items-center border-1 bg-white rounded-lg'>
                        <img src={google} alt="google" className='google' />
                        <p className='m-4 text-lg font-medium'>Google Account</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;