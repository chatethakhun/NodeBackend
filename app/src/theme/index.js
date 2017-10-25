import styled from 'styled-components'

export const FlexContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
export const NavBar = styled.div`
    height: 50px;
    width: 100%;
    background-color: #333333;
`

export const Text = styled.p.attrs({
    
    color: props => props.fontColor || '#333333',
    fontSize: props => props.size || '1.2em',
})`
    padding-left: 100px;
    margin-bottom: 0;
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
`