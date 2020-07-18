import React from "react";
import Breeds from "./Breeds";

 class Main extends React.Component{

     state={
         isFetched: false,
         breeds: []
     }

     async componentDidMount() {
         const response = await fetch("https://dog.ceo/api/breeds/list/all");
         const data = await response.json()
         const breedsArray = Object.keys(data.message)
         this.setState({
             breeds: breedsArray,
             isFetched: true
         })
     }



     render() {
         return (
             <div>
                 <div>Main</div>
                 {this.state.isFetched ? <Breeds array={this.state.breeds}/> : <div>Loading</div>}

             </div>

         )

     }

 }

 export default Main

