import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div>
      <form onSubmit={loginUser}>
        <input
          className="peer h-full w-50 rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0"
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <input
          className="peer h-full w-50 rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0"
          type="password"
          name="password"
          placeholder="Enter password"
        />
        <input
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
          value="Login"
        />
      </form>
    </div>
  );
};

export default LoginPage;
