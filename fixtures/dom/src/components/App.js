import React from 'react';
import '../style.css';

const FnComponent=function(){
  return <div>777</div>
}
class Name extends React.Component{
  render(){
    return (
    <div>name</div>
    )
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
       sss
      <FnComponent/>
      <Name></Name>
      </div>
    );
  }
}
console.log(new App().render());
export default App;
