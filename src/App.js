import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 20;
  apiKey = process.env.REACT_APP_NEWS_API;
 
    state = {
      progress: 0 // Initial state value
    };
  

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
 
  router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>              
          <NavBar />
          <News
            setProgress={this.setProgress}            
            key="general"
            pageSize={this.pageSize}
            country="in"
            category="general"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}            
            key="business"
            pageSize={this.pageSize}
            country="in"
            category="business"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}
            key="entertainment"
            pageSize={this.pageSize}
            country="in"
            category="entertainment"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}
            key="health"
            pageSize={this.pageSize}
            country="in"
            category="health"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}
            key="science"
            pageSize={this.pageSize}
            country="in"
            category="science"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}
            key="sports"
            pageSize={this.pageSize}
            country="in"
            category="sports"
            apiKey={this.apiKey}
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
            setProgress={this.setProgress}
            key="technology"
            pageSize={this.pageSize}
            country="in"
            category="technology"
            apiKey={this.apiKey}
          />
        </div>
      ),
    },
  ]);

  render() {
    return (
      <div>
         <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
        <RouterProvider router={this.router} />
      </div>
    );
  }
}
