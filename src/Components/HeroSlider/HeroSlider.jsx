import React from 'react'

const HeroSlider = ({ slide }) => {
    const img = ` data:image/jpeg;base64,${slide.img}`;
    return (

        <li>
            <article className="uk-article uk-article-slideshow">
                <div className="uk-cover-background uk-position-cover"
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
                <img className="uk-invisible" src={img} alt="" />
                <div className="uk-overlay-panel uk-overlay-background uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">
                    <div>

                        <h2 className="uk-article-title">{slide.title}</h2>
                    </div>
                </div>
            </article>
        </li>

    )
}

export default HeroSlider