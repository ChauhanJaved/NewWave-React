import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar />
          <News
            key="general"
            pageSize={this.pageSize}
            country="in"
            category="general"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="business"
            pageSize={this.pageSize}
            country="in"
            category="business"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="entertainment"
            pageSize={this.pageSize}
            country="in"
            category="entertainment"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="health"
            pageSize={this.pageSize}
            country="in"
            category="health"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="science"
            pageSize={this.pageSize}
            country="in"
            category="science"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="sports"
            pageSize={this.pageSize}
            country="in"
            category="sports"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
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
            key="technology"
            pageSize={this.pageSize}
            country="in"
            category="technology"
            apiKey="1c8d90bf5ac347e38bd960feb71d9c0d"
          />
        </div>
      ),
    },
  ]);

  render() {
    return (
      <div>
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
