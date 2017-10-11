import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import Page from './Page'
import styles from './Pages.scss'
class Pages extends Component {
  state = {
    pages: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }
    render() {
        return (
            <table className='table'  >
                <thead>
                    <tr className={styles['text-center']}>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.pages.map((page) => (
                            <Page
                            key={page.id}
                            id={page.id} 
                            title={page.title}/> 
                        ))
                    }
                </tbody>
            </table>
        );
      }
}

export default Pages;