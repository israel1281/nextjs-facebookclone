import { signIn } from "next-auth/client"

function Login() {
  return (
    <div className="grid place-items-center mt-20">
      <img 
       src="https://links.papareact.com/5me"
       height={200}
       width={200}
       objectFit="contain"
      />
      <h1 onClick={signIn} className="p-5 mt-10 bg-blue-500 rounded-full text-white
      text-center cursor-pointer">
        Login with Facebook
      </h1>
    </div>
  )
}

export default Login
