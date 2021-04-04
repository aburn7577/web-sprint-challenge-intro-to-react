import React, { useEffect } from 'react'
import Axios from 'axios'

export default function Character(props) {
    const { starwars } = props


    return (
        <div>
            <h2>{starwars.name}</h2>


            <button>See About</button>
            <ul>
                Gender: {starwars.gender}
                Height: {starwars.height}
                Mass: {starwars.mass}
                Birth Year: {starwars.birth_year}
                Eye Color: {starwars.eye_color}
                Hair Color: {starwars.hair_color}
                Skin Color: {starwars.skin_color}
            </ul>
        </div>
    )
}
