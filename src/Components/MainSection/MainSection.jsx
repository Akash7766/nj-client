import React from 'react'
import InstagramSection from '../InstagramSection/InstagramSection'
import OurProjects from '../OurProjects/OurProjects'

const MainSection = () => {
    return (

        <div className="uk-container uk-container-center uk-padding-remove">
            <div id="tm-middle" className="tm-middle uk-grid" data-uk-grid-match data-uk-grid-margin>
                <div className="uk-width-1-1 ">
                    {/* 
                        <!--start main-top block-->
                        <!--<section id="tm-main-top" className="tm-main-top uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin></section>-->
                        <!--end main-top block--> */}

                    <main id="tm-content" className="tm-content">


                        <div className="uk-grid tm-blob-frontpage" data-uk-grid-margin data-uk-grid-match>

                            <div className="uk-width-1-1 uk-margin-small-top">
                                <div className="uk-slidenav-position uk-overlay-active">
                                    <div className="uk-active">
                                        <article className="uk-article uk-article-slideshow">
                                            <div className="uk-cover-background uk-position-cover"
                                                style={{ backgroundImage: "url('assets/images/banners/1.jpg')" }}></div>
                                            <img className="uk-invisible" src="assets/images/banners/1.jpg" alt=""
                                                width="1720" height="700" />
                                            <div
                                                className="uk-overlay-panel uk-overlay-background uk-overlay-fade  uk-text-center">
                                                <div>
                                                    <div id="price" className="uk-grid ">

                                                        <div className="uk-width-1-3">
                                                            <div className="plan">
                                                                <div className="plan-contaqiner">
                                                                    <div className="plan-inner">
                                                                        <div className="entry-title">
                                                                            <h3 className="uk-panel-title">yOUR CHOICE</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="entry-content">
                                                                        <img className="package-img"
                                                                            src="assets/images/package/1.jpg" alt="" />
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem
                                                                            Ipsum has been the industry's standard dummy
                                                                            text ever since the 1500s, when an unknown
                                                                            printer took a galley of type and scrambled
                                                                            it to make a type specimen book. It has
                                                                            survived not only five centuries, but also
                                                                            the leap into electronic typesetting,
                                                                            remaining essentially unchanged. It was
                                                                            popularised in the 1960s with the release of
                                                                            Letraset sheets containing Lorem Ipsum
                                                                            passages, and more recently with desktop
                                                                            publishing software like Aldus PageMaker
                                                                            including versions of Lorem Ipsum.
                                                                        </p>
                                                                    </div>

                                                                    <a className="tm-animate-button" href="#"><span>Buy
                                                                        Now</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="uk-width-1-3">
                                                            <div className="plan">
                                                                <div className="plan-contaqiner">
                                                                    <div className="plan-inner">
                                                                        <div className="entry-title">
                                                                            <h3 className="uk-panel-title">yOUR CHOICE</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="entry-content">
                                                                        <img className="package-img"
                                                                            src="assets/images/package/1.jpg" alt="" />
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem
                                                                            Ipsum has been the industry's standard dummy
                                                                            text ever since the 1500s, when an unknown
                                                                            printer took a galley of type and scrambled
                                                                            it to make a type specimen book. It has
                                                                            survived not only five centuries, but also
                                                                            the leap into electronic typesetting,
                                                                            remaining essentially unchanged. It was
                                                                            popularised in the 1960s with the release of
                                                                            Letraset sheets containing Lorem Ipsum
                                                                            passages, and more recently with desktop
                                                                            publishing software like Aldus PageMaker
                                                                            including versions of Lorem Ipsum.
                                                                        </p>
                                                                    </div>

                                                                    <a className="tm-animate-button" href="#"><span>Buy
                                                                        Now</span></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="uk-width-1-3">
                                                            <div className="plan">
                                                                <div className="plan-contaqiner">
                                                                    <div className="plan-inner">
                                                                        <div className="entry-title">
                                                                            <h3 className="uk-panel-title">yOUR CHOICE</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="entry-content">
                                                                        <img className="package-img"
                                                                            src="assets/images/package/1.jpg" alt="" />
                                                                        <p>
                                                                            Lorem Ipsum is simply dummy text of the
                                                                            printing and typesetting industry. Lorem
                                                                            Ipsum has been the industry's standard dummy
                                                                            text ever since the 1500s, when an unknown
                                                                            printer took a galley of type and scrambled
                                                                            it to make a type specimen book. It has
                                                                            survived not only five centuries, but also
                                                                            the leap into electronic typesetting,
                                                                            remaining essentially unchanged. It was
                                                                            popularised in the 1960s with the release of
                                                                            Letraset sheets containing Lorem Ipsum
                                                                            passages, and more recently with desktop
                                                                            publishing software like Aldus PageMaker
                                                                            including versions of Lorem Ipsum.
                                                                        </p>
                                                                    </div>

                                                                    <a className="tm-animate-button" href="#"><span>Buy
                                                                        Now</span></a>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-1-1 uk-margin-small-top">
                                <OurProjects />
                            </div>

                            {/* <div className="uk-container">

                                    <article className="uk-article uk-article-inline">

                                        <div className="uk-grid uk-grid-medium uk-flex-middle" data-uk-grid-match=""
                                            data-uk-grid-margin="">

                                            <div className="uk-width-1-1 uk-width-large-1-2">
                                                <h1 className="uk-panel-title">Our Leatest Blog</h1>
                                                <p className="uk-article-meta">
                                                    <time datetime="2016-03-11">March 11, 2016</time>
                                                </p>

                                                <h2 className="uk-article-title"><a className="uk-display-block" href="#">The
                                                    Bloomsbury Hotel and A London Trip</a></h2>

                                                <p>With inspirational phrases like "strong is now beautiful" and "strength
                                                    is now confidence," some of America's most beautiful and athletic women
                                                    are speaking out in this video. </p>

                                                <div className="uk-text-center">
                                                    <ul className="uk-article-navbar">
                                                        <li className="uk-social-button"><a href="#"><span
                                                            className="uk-icon-github"></span></a></li>
                                                        <li className="uk-social-button"><a href="#"><span
                                                            className="uk-icon-instagram"></span></a></li>
                                                        <li className="uk-social-button"><a href="#"><span
                                                            className="uk-icon-linkedin"></span></a></li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="uk-width-1-1 uk-width-large-1-2 uk-row-first">
                                                <a className="uk-display-block uk-text-center" href="#"><img alt=""
                                                    src="assets/images/post-photos/530x610/post-photo12-530x610.jpg" /></a>
                                            </div>
                                        </div>
                                    </article>
                                </div>*/}
                            <div className="uk-width-1-1 uk-margin-small-top">

                                <div className="uk-panel tm-related-posts-slider">
                                    <h3 className="uk-panel-title"><a href="http://instagram.com/elartica_hub" rel="me"
                                        target="_blank">Follow Us</a>@Instagram</h3>
                                    <InstagramSection />
                                </div>

                            </div>

                        </div>


                    </main>


                </div>

            </div>
        </div>

    )
}

export default MainSection