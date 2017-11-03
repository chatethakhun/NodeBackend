import React from 'react';
import { ALink } from '../../theme/'


export const A = props => {
    return(
        <ALink href="https://www.w3schools.com" size={'1em'} fontColor={'white'}>            
            <span class="fa fa-facebook-square" />  {props.value}
        </ALink>
    )
}