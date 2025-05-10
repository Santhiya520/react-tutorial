import React from "react";
 class Apple extends React.Component{
    render(){
        const{appleInput}=this.props;
        const {qty,color} = appleInput;
        const fruit = "Apple";
        const text = `I have ${qty} ${color} ${fruit}`;

        return(
            <h2>{text}</h2>
        )
    }
 }
  export default Apple;