import React from "react";

class Name extends React.Component{
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
  componentDidMount(){
    document.getElementById('btn').onclick=()=>{
      this.setState({
        num:this.state.num+1
      })
      console.log(this.state.num,'domli');
    }
  }
  render(){
    return (
      <div>
        name components
        <div>{this.state.num}</div>
        <button onClick={this.handleClick} id='btn'>点击</button>
      </div>
    )
  }
}



function App() {
  return (
    <div>
      <div>sss</div>
      <Name></Name>
    </div>
  );
}

export default App;
