import React from "react"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      num:0
    }
  }
  handleClick=()=>{
    this.setState({
      num:this.state.num+1
    })
    console.log(this.state.num);
    setTimeout(()=>{
      this.setState({
        num:this.state.num+1
      })
      console.log(this.state.num);
    })
  }
  render() {
    return (
      <div>
        name compoenent
        <div>{this.state.num}</div>
        <button onClick={this.handleClick}>btn</button>
      </div>
    );
  }
}

export default App;
