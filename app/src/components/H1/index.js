import React from 'react'; 


import { Text } from '../../theme/'
export const H1 = props => {
    console.log(props)
    return (
        <Text fontColor={'white'} size={'1.5em'}>{props.value}</Text>
    )
}


