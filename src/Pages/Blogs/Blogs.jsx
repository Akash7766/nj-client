import React from 'react'
import MyBlogs from '../../Components/MyBlogs/MyBlogs'
import Footer from '../../Shared/Footer/Footer'

const Blogs = () => {
    return (
        <div id='tm-wrapper'>
            <div class="uk-container uk-container-center tm-main-content">
                <div id="tm-middle" class="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
                    <div class="uk-width-1-1">


                        <main id="tm-content" class="tm-content">


                            <MyBlogs />


                            {/* <ul class="uk-pagination uk-text-center">
                            <li class="uk-active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><span>...</span></li>
                            <li><a href="#">6</a></li>
                            <li class="older_posts"><a href="#">Older posts<span class="tm-icon-long-arrow-right"></span></a></li>
                        </ul> */}

                        </main>



                    </div>

                </div>
            </div >
            <Footer />
        </div>

    )
}

export default Blogs