// import Login from './components/login'
// import Profile from './components/profile'
// import './App.css'
// import UserContextProvider from './context/UserContextProvider'

// function App() {
  
//   return (
//     <UserContextProvider>
//       <h1 className='text-center text-8xl'>Hello</h1>
// //       {/* <Login/>
// //       <Profile/> */}
// //     </UserContextProvider>
// //   )
// // }

// export default App

import { useState } from 'react';
import './App.css'
import Card from "./components/Card.jsx";
import Themebtn from "./components/Themebtn.jsx";
import { ThemeProvider } from './context/Theme.js';
import { useEffect } from 'react';
function App() {
  const [thememode,setThememode] = useState("light")
 

  const darkTheme = () => {
    setThememode('dark')
  }

  const lightTheme = () => {
    setThememode('light')
  }
  
  useEffect(()=>{
    document.querySelector("html").classList.remove("dark","light")
    document.querySelector("html").classList.add(thememode)
  },[thememode])
  return (
    <ThemeProvider
  value={{
    themeMode: thememode,
    darkTheme,
    lightTheme,
  }}
>
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <div className="fixed top-5 right-5">
        <Themebtn />
      </div>

      {/* Card */}
      <div className="flex items-center justify-center min-h-screen">
        <Card />
      </div>

    </div>
    </ThemeProvider>
    
  );
}

export default App;