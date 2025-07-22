import { Route, Routes } from "react-router"
import AppLayout from "./AppLayout/AppLayout"
import UserLogin from "./AppLayout/Pages/UserLogin/UserLogin"
import Login from "./AppLayout/Pages/UserLogin/Login/Login"
import Registration from "./AppLayout/Pages/UserLogin/Registration/Registration"
import Home from "./AppLayout/Pages/Home/Home"
import { ToastContainer } from 'react-toastify';
import UserProvider from "./AppLayout/context/contextBonk/ContextBonk"
import SchoolHome from "./AppLayout/Pages/SchoolHome/SchoolHome"
import { Provider } from "react-redux"
import uSerStore from "./redux/store.jsx"



function App() {


  return (
    <>
      <Provider store={uSerStore}>
        <UserProvider>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<SchoolHome />} />
              <Route path="Home" element={<Home />} />
              <Route path="UserLogin" element={<UserLogin />}>
                <Route index element={<Login />} />
                <Route path="Registration" element={<Registration />} />
              </Route>
            </Route>
          </Routes>
        </UserProvider>
      </Provider>
    </>
  )
}

export default App
