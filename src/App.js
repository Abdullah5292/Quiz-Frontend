import AuthPage from "./components/authPage";
import { NotificationContainer } from "react-notifications";
import { useSelector } from "react-redux"
import HomePage from "./components/homePage";
import ProfilePage from "./components/ProfilePage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {loggedIn ? <HomePage /> : <AuthPage />}
    //   <NotificationContainer />
    // </div>
  );
}

export default App;
