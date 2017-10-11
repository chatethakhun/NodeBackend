import React, { Component } from 'react';

class Page extends Component {

    render() {

      console.log(this.props)
      const { id , title } = this.props;

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