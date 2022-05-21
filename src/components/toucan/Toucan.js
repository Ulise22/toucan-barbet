import React from "react";
import toucan from '../images/toucanBarbet.jpg';
import './Toucan.css';

const Toucan = () => {
    return(
        <div name="toucan" className="toucan">
            <div className="container">
                <div className="toucan__container">
                    <div className="toucan__container">
                        <div className="toucan__text">
                            <h1 className="toucan__text__title">About the Toucan Barbet</h1>
                            <p className="toucan__text__p">The toucan barbet (Semnornis ramphastinus) is a barbet native to western Ecuador and Colombia. Along with the prong-billed barbet, it forms the family Semnornithidae, and is closely related to the toucans. It is a medium-sized barbet with a robust yellow bill. It has striking plumage, having a black head with grey throat and nape, red breast and upper belly, yellow lower belly and grey wings and tail.</p>
                            <p className="toucan__text__p">The toucan barbet is native to humid montane forests, where it occupies all levels of the canopy and is found in both primary and secondary forests, as well as forest edges. It is social, living in small family groups which work together to defend their territories and raise the chicks communally. It feeds on fruit and a range of animal prey, with insects being an important part of the diet of chicks. It sometimes joins mixed-species feeding flocks. Chicks are raised in cavities dug into large, usually dead trees.</p>
                            <p className="toucan__text__p">Young toucan barbets are preyed upon by plate-billed mountain toucans. The species is considered to be near threatened, mainly due to trapping for the cage-bird trade. It has also declined due to habitat loss, particularly the loss of large trees in which to breed, although the species is adaptable if left unmolested.</p>
                        </div>
                        <div className="toucan__img">
                            <img src={toucan} alt="toucan barbet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toucan;