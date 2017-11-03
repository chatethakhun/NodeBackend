import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`

export const GridContainer = styled.div.attrs({
    row: props => props.row || '1fr',
    columns: props => props.columns || '1fr 1fr'
})`
    display: grid;
    height: 100%;
    grid-template-rows: ${props => props.row};
    grid-template-columns: ${props => props.columns}
`
export const NavBar = styled.div`
    height: 50px;
    width: 100%;
    background-color: #333333;
    padding-left: 100px;
    padding-right: 100px;
`

export const Text = styled.p.attrs({
    
    color: props => props.fontColor || '#333333',
    fontSize: props => props.size || '1.2em',
})`
    margin: auto;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
`

export const ALink = styled.a.attrs({
    
    color: props => props.fontColor || '#333333',
    fontSize: props => props.size || '1.2em',
})`
    margin: auto;
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    &:hover {
        text-decoration: none;
        color: white;
    }
`