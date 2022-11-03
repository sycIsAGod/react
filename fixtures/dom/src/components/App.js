import React from 'react';
// import { useState } from 'react';

import '../style.css';
// const FnComponent = function () {
//   const [state, setState] = useState(0)
// const  handleClick = () => {
//     setState((states)=>states+1)
//     console.log(state);
//     setTimeout(() => {
//       setState((states)=>states+1)
//      console.log(state);
//     }, 1000)
//     namefn()
//   }
//   const namefn=()=>{
//     console.log(state);
//   }
//   return <div>{state} <button onClick={handleClick}>btn</button></div>
// }
// class Name extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       age:11
//     }
//   }
//    handleClick=()=>{
//     this.setState({
//       age:this.state.age+1
//     })
//    }
//   render() {
//     return (
//       <div>name
//         <div>{this.state.age}</div>
//         <div>
//           <button onClick={this.handleClick}>btn</button>
//         </div>
//       </div>
//     )
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }

  handleClick = () => {
    this.setState({
      num:this.state.num+1
    })
    // console.log(this.state.num);
    // setTimeout(() => {
    //   this.setState(() => {
    //     return {
    //       num: this.state.num + 1
    //     }

    //   })
    //   console.log(this.state.num);

    //   // flushSync(() => {
    //   //   this.setState({
    //   //     num:this.state.num+1
    //   //   })
    //   // });
    //   // console.log(this.state.num);
    // }, 1000)
  }
  // componentDidMount() {
  //   this.setState({
  //     num: this.state.num + 1
  //   })
  //   console.log(this.state.num);
  //   this.setState({
  //     num: this.state.num + 1
  //   })
  //   console.log(this.state.num);
  //   setTimeout(() => {
  //     this.setState((state)=>{
  //       return  {
  //          num: state.num+2
  //        }
  //      })
  //     console.log(this.state.num);
  //     this.setState((state)=>{
  //       return  {
  //          num: state.num+2
  //        }
  //      })
  //     console.log(this.state.num);
  //     this.setState((state)=>{
  //      return  {
  //         num: state.num+2
  //       }
  //     })
  //     console.log(this.state.num);
  //   }, 1000)
  //   // console.log(this.state.num);
  //   // document.getElementById('btn').onclick=()=>{
  //   //   console.log(this.state.num,'ssssqian');

  //   //   this.setState({
  //   //     num: this.state.num + 2
  //   //   })
  //   //   console.log(this.state.num,'sssshou');
  //   // }
  // }
  render() {
    return (
      <div>
        sss
        <div >{this.state.num}</div>
        {/* <FnComponent /> */}
        {/* <Name></Name> */}
        <button id='btn' onClick={this.handleClick}>按钮</button>
      </div>
    );
  }
}
// console.log(new App().render());
export default App;
