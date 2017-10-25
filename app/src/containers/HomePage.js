import React from 'react'




import { NavBar, FlexContainer } from '../theme/'
import {H1} from '../components/H1/'
import {H2} from '../components/H2/'


class HomePage extends React.Component {
    render() {
        return (
            <NavBar>
                <FlexContainer>
                    <H1 value={'MY COLLECTION GUNDAM'}></H1>
                    <H2 value={'My facebook'} />
                </FlexContainer>
            </NavBar>
        )
    } 
}

export default HomePage