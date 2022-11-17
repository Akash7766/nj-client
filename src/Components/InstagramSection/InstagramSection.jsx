import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import UseInstagram from '../../Hooks/UseInstagram'

const InstagramSection = () => {
    const { data:instagramPost, error, isError, isLoading,refetch } = useQuery('instagramPost', async()=>{
        const { data } = await axios.get('http://localhost:5000/api/v1/instagram')
        return data
    });
        return (

      
        <div className="uk-slidenav-position" data-uk-slider="{autoplay:false}">

            <div className="uk-slider-container">
                <div
                    className="uk-slider uk-grid uk-grid-medium uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-5">{
                        instagramPost?.data?.map(ig =>
                            <div key={ig._id}>
                                <div className="uk-article uk-article-list uk-article-related">
                                    <a href="#" className="uk-display-block"><img
                                        src={`data:image/jpeg;base64,${ig.img}`}
                                        alt="" /></a>

                                </div>
                            </div>)
                    }

                </div>
            </div>


            <a href="#" className="uk-slidenav uk-slidenav-arrow uk-slidenav-previous"
                data-uk-slider-item="previous"></a>
            <a href="#" className="uk-slidenav uk-slidenav-arrow uk-slidenav-next"
                data-uk-slider-item="next"></a>

        </div>
    )
}

export default InstagramSection