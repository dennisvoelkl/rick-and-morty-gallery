/*Implementiere eine CharacterGallery, die für alle Charaktere je eine CharacterCard anzeigt*/
import CharacterCard from "./CharacterCard";
import {CharacterModel} from "./CharacterModel";

export default function CharacterGallery(props: {test:CharacterModel[]}) {
return (
    <>
        {
            props.test.map(singleCharacter =>
                <CharacterCard characterProps={singleCharacter} key={singleCharacter.id}/>
            )
        }

    </>
)
}