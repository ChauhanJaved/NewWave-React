import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default class App extends Component {
  pageSize = 20;
  apiKey="74dcf378f4c24600b5b5e38115eb05d6";
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
            apiKey = {this.apiKey}
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
