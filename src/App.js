import React, {Component} from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  };


  //learning to pull from JSON files 
componentDidMount() {
  
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      return res.json();
    })
    .then(data => {
      // console.log(data[1].name);
      this.setState ({
        isLoaded: true,
        items: data,
      })
    })
}


  render() {
    let {isLoaded, items} = this.state;
    console.log(items)  
    if (!isLoaded) {
      return <div>Loading...</div>;
    }else { 
      return (
       <div>
          <div>
           <ul>
             {items.map(el => {
               return (
               <li>Name: {el.name} | Username: {el.username} | <a href={`https://${el.website}`}>Website</a></li>
               )
             })}
           </ul>
         </div>
        </div>
      
      );
    }
  };
};

export default App;
   
