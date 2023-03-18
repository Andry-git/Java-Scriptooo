import React, { Component } from "react";
import "./App.css";

class Cats extends React.Component {
	state={cats: [], newCatText:''};
	
	handleInput=(e)=>this.setState({newCatText:e.target.value});
	
	handleSave=()=>{
		fetch('api/cat', {method:'POST',
							headers:{'Accept': 'application/json',
									 'Content-Type': 'application/json'},
							body:JSON.stringify({cat:this.state.newCatText}),
	})
	.then(()=>{
		this.getCats();
	});
	};
	
	handleDelete=(index)=>{
		fetch('api/cat', {method:'DELETE',
							headers:{'Accept': 'application/json',
									 'Content-Type': 'application/json'},
							body:JSON.stringify({index:index}),
	})
	.then(()=>{
		this.getCats();
	});
	};
	
	getCats = () => {
		fetch('/api/cats',{method:'GET'})
		.then(x=>x.json())
		.then(data=>{
			this.setState({cats:data.cats, newCatText:''});
		});
	};
	
	// вызовется один раз после первого render
  componentDidMount() {
	  this.getCats();
  }


  render(){
    return(
      <div>
	  {this.state.cats.map((cat,i)=>
		<div>
			{cat}
			<button onClick={()=>this.handleDelete(i)}>X</button>
		</div>
	  )}
	  <button onClick={this.handleSave}>SAVE</button>
	  <input
			value={this.state.newCatText}
            onChange={this.handleInput}
	  />
      </div>
    );
  }
}

/*class App extends Component {
  componentDidMount() {
    fetch('/api/cats').then(data => data.json()).then(data => console.log(data));

    fetch('/api/cat', {
      body: JSON.stringify({ cat: 'moo' }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World!2 </h1>
      </div>
    );
  }
}*/

// render
// didmount
// render with data
// fetch new cats 
// render

export default Cats;