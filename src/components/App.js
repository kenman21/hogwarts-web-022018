import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList'
import Filter from './Filter'
import hogs from '../porkers_data'

class App extends Component {

  state = {
    hogs: hogs,
    clickedhogs : [],
    filter: "",
    hiddenhogs: []
  }

  hogHidden = (name) => {
    if (this.state.hiddenhogs.includes(name)){
      let index = this.state.hiddenhogs.indexOf(name)
      this.setState({
        hiddenhogs: [...this.state.hiddenhogs.slice(0,index), ...this.state.hiddenhogs.slice(index+1)]
      })
    } else {
    this.setState({
      hiddenhogs: [...this.state.hiddenhogs, name]
    })
  }
  }

  hogClicked = (name) => {
    if (this.state.clickedhogs.includes(name)){
      let index = this.state.clickedhogs.indexOf(name)
      this.setState({
        clickedhogs: [...this.state.clickedhogs.slice(0,index), ...this.state.clickedhogs.slice(index+1)]
      })
    } else {
    this.setState({
      clickedhogs: [...this.state.clickedhogs, name]
    })
  }
  }

  filterSearch = (search) => {
    this.setState({
      filter: search
    })
  }

  changeHogs = () => {
    let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    let sortedhogs
    if (this.state.filter === "increasing") {
      sortedhogs = this.state.hogs.sort(function(a,b) { return (a[weight] - b[weight])})
    } else if (this.state.filter === "decreasing"){
      sortedhogs = this.state.hogs.sort(function(a,b) { return (b[weight] - a[weight])})
    } else {
      sortedhogs = this.state.hogs.filter(hog => hog.greased === true)
    }
    this.setState({
      hogs: sortedhogs
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
          < Filter filterSearch={this.filterSearch} changeHogs={this.changeHogs}/>
          < HogList hogs={this.state.hogs} hogClicked={this.hogClicked} clickedhogs={this.state.clickedhogs}  hogHidden={this.hogHidden} hiddenhogs={this.state.hiddenhogs}/>
      </div>
    )
  }
}

export default App;
