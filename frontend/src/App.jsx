import { Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <>
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </>
  );
}

export default App;
