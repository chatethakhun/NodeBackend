import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        
        const data = [{
             "title": this.state.title,
             "content": this.state.content
         }];
         console.log(data)
        fetch('http://localhost:4000/pages', {
          method: 'POST',
          body: {
            "title": this.state.title,
            "content": this.state.content
            },
        });
      }
      
      onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }
      render() {
        return (
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="title">Enter your Title</label>
            <input id="title" name="title" value={this.state.title} type="text" onChange={this.onChange} />
    
            <label htmlFor="content">Enter your Content</label>
            <input id="content" name="content" value={this.state.content} type="text"  onChange={this.onChange}/>
    
            <button>Send data!</button>
          </form>
        );
      }
}

export default Form;