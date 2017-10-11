import React, { Component, PropTypes  } from 'react';
import fetch from 'isomorphic-fetch'

class Page extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }
  
    render() {

      const { id , title} = this.props.page;
        return (

              <tr>
                <th>{id}</th>
                <td>{title}</td>
                <td>
                  <a href='javascript:void(0)'>Show</a>
                </td>
              </tr>

        );
      }
}

export default Page;