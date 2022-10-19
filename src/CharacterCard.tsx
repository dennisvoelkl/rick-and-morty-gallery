import './CharacterCard.css';
import {CharacterModel} from './CharacterModel';
type characterProps = {characterProps:CharacterModel};

export default function characterCard(props: characterProps){
    return (
        <>
            <div className="CharacterCard">
                    <h1>{props.characterProps.name}</h1>
                    <img src={props.characterProps.image}/>
                    <a>{props.characterProps.origin.name}</a>
            </div>
        </>
    )
}