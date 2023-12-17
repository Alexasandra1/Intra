import React from 'react';
import { MainPage } from "./pages/MainPage/MainPage";
import { DesignsPage } from "./pages/DesignsPage/DesignsPage";
import { InformationDesign } from "./pages/IndormationDesign/InformationDesign"
import { FourPage } from "./pages/FourPage/FourPage";
import { AboutUsPage } from "./pages/AboutUsPage/AboutUsPage";
import { InstructionPage } from "./pages/InstructionPage/InstructionPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage"
import { AddDesignPage } from "./pages/AddDesignPage/AddDesignPage"
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { LogInPage } from "./pages/LogInPage/LogInPage"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './../src/App.scss';

export class App extends React.Component {
  render() {
    return (
      <>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/design" element={<DesignsPage />} />
            <Route path="/infdesign" element={<InformationDesign />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/instruction" element={<InstructionPage />} />
            <Route path="/infDesign/:id" element={<InformationDesign />} />
            <Route path="/addDesign" element={<AddDesignPage />} />

            {/* <Route path="/infDesign" element={<InformationDesign />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/reg" element={<RegistrationPage />} />
            {/* <Route path="*" element={<FourPage />} /> */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
            <Route path="*" element={<Navigate to="/main" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрошенная страница не существует.</p>

    </div>
  );
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
