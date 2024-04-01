
import { useNavigate } from "react-router-dom";

const MeTutor = () => {
  const navigate = useNavigate();

  const BackToHome = () => {
    navigate("/");
  }

  const HandleSignUp = () => {
    navigate("/register");
  }

  const HandleLogIn = () => {
    navigate("/login");
  }

  return (
    <div>
      <div className="flex justify-between items-center p-7">
        <h1 className="text-2xl text-blue-700 font-bold" onClick={BackToHome}>MeTutor</h1>
        <div className="flex gap-10 text-lg">
          <h2 className="hover:underline">Home</h2>
          <h2 className="hover:underline">Category</h2>
          <h2 className="hover:underline">Find Teachers</h2>
          <h2 className="hover:underline">About Us</h2>
        </div>
        <div>
          <button onClick={HandleSignUp} className="btn-color px-10 py-2 rounded-2xl hover:bg-blue-500 mr-4">Sign up</button>
          <button onClick={HandleLogIn} className="text-blue-700 border-2 border-blue-600 px-10 py-2 rounded-2xl hover:bg-gray-200 ml-4">Login</button>
        </div>
      </div>
      {/*  */}
      <div className="body flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white mb-1">Enhance Your Study with <span className="text-blue-700">ME TUTOR</span></h1>
        <h2 className="text-2xl font-medium text-white mb-5">Increasing your <span className="text-blue-700">Knowledge</span > with the <span className="text-blue-700">Best Teacher</span></h2>
          <div>
            <button onClick={HandleLogIn} className="btn-color px-6 py-2 rounded-xl hover:bg-blue-500 mr-6">Get Started</button>
            <button onClick={HandleSignUp} className="bg-white text-blue-700 px-6 py-2 rounded-xl hover:bg-gray-200 ml-6">Learn more</button>
          </div>
        </div>
      </div>
  )
}

export default MeTutor;