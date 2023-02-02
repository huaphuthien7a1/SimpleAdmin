import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    // call api
    if (values.username === "admin" && values.password === "admin") {
      navigate("/admin");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="shadow-lg bg-gray-100 p-10 rounded-xl">
        <h1 className="font-bold text-2xl text-center">Đăng nhập</h1>
        <div className="flex flex-col gap-y-1 w-[400px] mt-4">
          <label htmlFor="username">Tên đăng nhập:</label>
          <input
            name="username"
            value={values.username}
            onChange={handleChange}
            type="text"
            id="username"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-y-1 w-[400px] mt-2">
          <label htmlFor="password">Mật khẩu:</label>
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            className="focus:outline-none rounded-lg px-2 py-2 border border-gray-300"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 py-2 px-4 rounded-lg text-white w-full mt-6 hover:bg-blue-700">
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
