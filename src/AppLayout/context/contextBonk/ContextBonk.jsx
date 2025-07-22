import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LoginUsersAction, UsersAction } from "../../../redux/Users/action";
import uSerStore from "../../../redux/store";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState("");
  const navigate = useNavigate()

  const inState = {
    data: [],
    filter: [],

  };


  const test=useSelector(state=>state)
console.log(test);


  const reducer = (state, action) => {
    switch (action.type) {
      case "AllData":
        return { ...state, data: action.payload, filter: action.payload };
      case "search":
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  const [toState, dispatch] = useReducer(reducer, inState);

  useEffect(() => {
    const getData = async () => {
      try {
        const productResponse = await fetch("http://localhost:3008/prodact");
        const productJson = await productResponse.json();
        dispatch({ type: "AllData", payload: productJson });
      } catch (error) {
        setError("خطا در بارگذاری داده‌ها");
      } finally {
        setLoading(false);
      }
    }
    getData()
  }, [])



  // بارگذاری داده‌های اولیه و بررسی وضعیت لاگین

  const dispatchUser = useDispatch()
  useEffect(() => {
    console.log('sss');
    
    const initializeDataAndLogin = async () => {
      try {
        setLoading(true);
        // دریافت داده‌های کاربران
        const userResponse = await fetch("http://localhost:3008/users");
        if (!userResponse.ok) {
          throw new Error("خطا در دریافت داده‌های کاربران");
        }
        const userJson = await userResponse.json();
        console.log(userJson);
        
        dispatchUser(UsersAction(userJson)); // ذخیره کاربران در Redux

        // بررسی وضعیت لاگین
        const loginData = JSON.parse(localStorage.getItem("login"));
        if (loginData) {
          setIsLogin(true);
          const userName = localStorage.getItem("userName");
          if (userName) {
            const objUser = userJson.find((item) => item.username === userName);
            if (objUser) {
              dispatchUser(LoginUsersAction(objUser)); // ذخیره کاربر لاگین‌شده
            } else {
              setError("کاربر یافت نشد");
              setIsLogin(false);
            }
          }
        }
      } catch (error) {
        console.error("Error initializing data:", error);
        setError("خطا در بارگذاری داده‌ها");
      } finally {
        setLoading(false);
      }
    };
    initializeDataAndLogin();
  }, []);


  const handleLogin = (data, findUser) => {
    if (findUser.email == data.email && findUser.password == data.password) {
      localStorage.setItem('login', 'true')
      localStorage.setItem('userName', data.userName)
      dispatchUser(LoginUsersAction(findUser));
      navigate('/')
      setIsLogin(true)
    }
    else {
      alert('Incorrect email or password.')
    }
  }

  const handleRegis =async (data) => {
  console.log('))))))))))))))))))))))))');
  
      try {
        // بررسی وجود کاربر با username یا email
        const userResponse = await fetch("http://localhost:3008/users");
        const userJson = await userResponse.json();
        const existingUser = userJson.find(
          (item) => item.username === data.userName || item.email === data.email
        );
        console.log('*******');
        // if (existingUser) {
        //   setError("کاربر با این نام کاربری یا ایمیل قبلاً ثبت شده است.");
        //   return;
        // }
        
        // ثبت کاربر جدید
        const response = await fetch("http://localhost:3008/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: data.name,
            family: data.family,
            username: data.userName,
            password: data.password,
            age: data.age,
            gender: data.gender,
            education_status: data.education_status,
            email: data.email,
            address: "----",
            image: "https://cdn.nody.ir/files/2022/08/15/nody--1660545014.png",
            id: new Date().toISOString(),
          }),
        });
console.log('testttttttttttttttttttttt');

        const newUser = await response.json();
        console.log("New user registered:", newUser);

        // ذخیره کاربر در localStorage و Redux
        localStorage.setItem("login", "true");
        localStorage.setItem("userName", data.userName);
        dispatchUser(LoginUsersAction(newUser));
        navigate("/");
        setIsLogin(true);
      } catch (error) {
        console.error("Error registering user:", error);
        setError("خطا در ثبت‌نام کاربر");
      }

  };





  // مدیریت جستجو
  useEffect(() => {
    if (searchData === "") {
      dispatch({ type: "search", payload: toState.data });
    } else {
      const dataFilter = toState.data.filter((item) =>
        item?.name?.toLowerCase().includes(searchData.toLowerCase())
      );
      dispatch({ type: "search", payload: dataFilter });
    }
  }, [searchData, toState.data]);

  return (
    <UserContext.Provider
      value={{
        toState,
        // toStateUser,
        searchData,
        setSearchData, // اضافه کردن setSearchData برای استفاده در کامپوننت‌های دیگر
        setIsLogin,
        handleLogin,
        handleRegis,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);