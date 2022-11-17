import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import UseSlider from '../../Hooks/UseSlider'
import HeroSlider from '../HeroSlider/HeroSlider';

const HeroSection = () => {
    const { data:sliders, error, isError, isLoading,refetch } = useQuery('sliders', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/slider')
        return data
    })    
    return (
        <div>
            <div className="uk-container uk-container-center uk-padding-remove">
                <section id="tm-top-a" className="tm-top-a uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
                    <div className="uk-width-1-1">
                        <div className="uk-grid tm-blob-frontpage uk-container-center" data-uk-grid-margin data-uk-grid-match>
                            <div className="uk-width-1-1 uk-width-medium-1-2">
                                <div className="uk-panel">
                                    <div className="uk-slidenav-position" data-uk-slideshow="{autoplay:true, animation: 'scale'}">
                                        <ul className="uk-slideshow uk-overlay-active">
                                            {
                                                sliders?.data?.map(slide => <HeroSlider key={slide._id} slide={slide} />)
                                            }
                                        </ul>
                                        <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-previous" data-uk-slideshow-item="previous"></a>
                                        <a href="#" className="uk-slidenav uk-slidenav-contrast uk-slidenav-next" data-uk-slideshow-item="next"></a>
                                    </div>

                                </div>
                            </div>
                            <div className="uk-width-1-1 uk-width-medium-1-2">
                                <div className="tm-blob-column-2">
                                    <article className="uk-article uk-article-list">


                                        <h2 className="uk-article-title"><a href="pages/about.html"> Attract new customer, and Increase Your Chances of Success</a></h2>
                                        <p>Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves...</p>

                                        <a className="tm-animate-button" href="#"><span>Read More</span></a>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        </div>
    )
}

export default HeroSection