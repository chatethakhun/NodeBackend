import React from 'react'




import { NavBar, GridContainer } from '../theme/'
import {H1} from '../components/H1/'
import {A} from '../components/A/'


class HomePage extends React.Component {
    render() {
        return (
            <NavBar>
                <GridContainer>
                    <H1 value={'MY COLLECTION GUNDAM'} />
                    <A value={'My Facebook'} />
                </GridContainer>
                <GridContainer>
                    <div>fdsfsd</div>
                    <div>fdsfs</div>
                </GridContainer>
            </NavBar>
        )
    } 
}

export default HomePage