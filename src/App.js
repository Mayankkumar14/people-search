import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Routes from "./routes";
import Header from "./layouts/Header";
import Notification from "./components/wrappers/notification";
import { ErrorBoundary, Fallback } from "./components/wrappers/errorBoundary";

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes />
          <Notification />
        </div>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
