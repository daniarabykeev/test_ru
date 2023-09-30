import { useMemo } from "react";
import MainRoutes from "./routes/MainRoutes";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createStore } from "./store/store.js";

function App() {
  const navigate = useNavigate();
  const store = useMemo(() => createStore(navigate), []);
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
}

export default App;
