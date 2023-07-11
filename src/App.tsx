import React, {useEffect} from "react";
import ErrorBoundary from "ErrorBoundary";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "redux/store";
import RoutesWrapper from "routes/routes";

const App = () => {
  useEffect(() => {
    document.body.classList.remove("load");
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <RoutesWrapper />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
