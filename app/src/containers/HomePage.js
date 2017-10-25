import React from 'react'




import { NavBar, FlexContainer } from '../theme/'
import {H1} from '../components/H1/'


class HomePage extends React.Component {
    render() {
        return (
            <NavBar>
                <FlexContainer>
                    <H1 value={'MY COLLECTION GUNDAM'}></H1>
                </FlexContainer>
            </NavBar>
        )
    } 
}

export default HomePage