import React from 'react'
import styled from 'styled-components'

const StyledCharacters = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 80%;
    padding: .5rem;
    border-width: 1rem;
    border: .3rem solid gray;
    margin: 1rem 10%;
    color: white;
    padding-top: 0;
    font-family: 'Arvo', serif;
`

const StyledBirth = styled.div`
    color: purple;
    background-color: gray;
    border-radius: 1rem;
    width: 4rem;
    padding: 1rem;
`


export default function Character(props) {
    const { starwars } = props

    return (
        <StyledCharacters>
            <h2>{starwars.name}</h2>
            <StyledBirth> {starwars.birth_year} </StyledBirth>

            {/* Gender: {starwars.gender}
                Height: {starwars.height}
                Mass: {starwars.mass} 
                Birth Year:*/}
            {/* Eye Color: {starwars.eye_color}
                Hair Color: {starwars.hair_color}
                Skin Color: {starwars.skin_color} */}
        </StyledCharacters>
    )
}
