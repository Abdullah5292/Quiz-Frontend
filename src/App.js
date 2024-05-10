import AuthPage from "./components/authPage";
import { NotificationContainer } from "react-notifications";
import { useSelector } from "react-redux"
import HomePage from "./components/homePage";
import ProfilePage from "./components/ProfilePage";

function App() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="App">
      {loggedIn ? <HomePage /> : <AuthPage />}
      <NotificationContainer />
      <button onClick={() => window.location.href = ''}>
        Go to Profile Page
      </button>
    </div>
  );
}

export default App;
