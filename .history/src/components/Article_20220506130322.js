import React from "react";

export default  class Article extends React.Component {
   
     constructor(props){
          super(props)
          this.state = {
              count: 0
          }

          this.timer = 0

     }

     componentDidMount(){
           this.timer = setInterval(()=>{
               this.setState({count: this.state.count ++})
           },100)
     }

    //  componentDidUpdate(){
    //      console.log('component is updated !!!')
    //  }




     render(){
        
         return(
            <>
                <h1>Article components</h1>
                <h3>Counter: {this.state.count}</h3>
            </>
         )
     }
}