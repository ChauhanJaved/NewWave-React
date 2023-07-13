import "./App.css";
import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="general"
            pageSize={pageSize}
            country="in"
            category="general"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "business",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="business"
            pageSize={pageSize}
            country="in"
            category="business"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "entertainment",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="entertainment"
            pageSize={pageSize}
            country="in"
            category="entertainment"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "health",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="health"
            pageSize={pageSize}
            country="in"
            category="health"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "science",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="science"
            pageSize={pageSize}
            country="in"
            category="science"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "sports",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="sports"
            pageSize={pageSize}
            country="in"
            category="sports"
            apiKey={apiKey}
          />
        </div>
      ),
    },
    {
      path: "technology",
      element: (
        <div>
          <NavBar />
          <News
            setProgress={setProgress}
            key="technology"
            pageSize={pageSize}
            country="in"
            category="technology"
            apiKey={apiKey}
          />
        </div>
      ),
    },
  ]);
  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <RouterProvider router={router} />
    </div>
  );
}
App.propTypes = {
  progress: PropTypes.number,
};
App.defaultProps = {
  progress: 0,
};
