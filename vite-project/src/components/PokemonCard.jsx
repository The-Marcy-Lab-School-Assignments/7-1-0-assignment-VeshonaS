// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react";
const PokemonCard = ({name, hp ,frontImage, backImage}) => {
    // console.log(name, hp ,frontImage, backImage)
    const [isFirstImage, setIsFirstImage] = useState(true);

  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };
    return (
        <div className="ui card">
            <div>
                <div className="image"onClick={toggleImage}>
                    {/* <img alt="pokemon name" src= {frontImage } />
                    <img alt="pokemon name" src= {backImage } /> */}
                    <img src={isFirstImage ? frontImage : backImage}/>
                </div>
                <div className="content">
                    <div className="header">{name} </div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard