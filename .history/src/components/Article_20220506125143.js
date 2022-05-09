import React from "react";

export default  class Article extends React.Component {
     constructor(props){
          super(props)
          this.state = {
              count: 0
          }
     }

     componentDidMount(){
           
     }




     render(){
         return(
            <>
                <h1>Article components</h1>
                <h3>Counter: {this.state.count}</h3>
            </>
         )
     }
}