import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"

import LoadingBar from "react-top-loading-bar"





export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  pageSize = 6;

  constructor() {
    super();
    this.state = {
      progress: 0
    }
  }

  updateProgress = (progress) => {
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.updateProgress(0)}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="general" pageSize={this.pageSize} category="general" />}>


            </Route>
            <Route exact path="/science" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="science" pageSize={this.pageSize} category="science" />}>


            </Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="technology" pageSize={this.pageSize} category="technology" />}>


            </Route>
            <Route exact path="/business" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="business" pageSize={this.pageSize} category="business" />}>


            </Route>
            <Route exact path="/health" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="health" pageSize={this.pageSize} category="health" />}>


            </Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} updateProgress={this.updateProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" />}>


            </Route>

          </Routes>
        </Router>
      </div>
    )
  }
}

export default App



