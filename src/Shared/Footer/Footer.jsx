import React from 'react'

const Footer = () => {
    return (
        <>

            <a className="tm-totop-scroller" data-uk-smooth-scroll href="#"></a>

            <footer id="tm-footer" className="tm-footer">

                <section id="tm-footer-b" className="tm-footer-b uk-grid" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin>
                    <div className="uk-width-1-1 uk-row-first">
                        <div className="uk-panel uk-panel-box uk-panel-box-primary uk-text-center tm-newsletter">
                            <div className="uk-grid">
                                <div className="uk-width-1-1 uk-container last-footer">
                                    <div className="uk-grid uk-dropdown-grid">
                                        <div className="uk-width-3-5">
                                            <div className="uk-panel uk-panel-box ">
                                                <div className="uk-grid">
                                                    <div className="uk-width-1-2">
                                                        <ul className="uk-nav uk-nav-navbar">
                                                            <li><a href="elements-headings.html">Headings</a></li>
                                                            <li><a href="elements-panels.html">Panels</a></li>
                                                            <li><a href="elements-form.html">Form</a></li>
                                                            <li><a href="elements-buttons.html">Buttons</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="uk-width-1-2">
                                                        <ul className="uk-nav uk-nav-navbar">
                                                            <li><a href="elements-headings.html">Headings</a></li>
                                                            <li><a href="elements-panels.html">Panels</a></li>
                                                            <li><a href="elements-form.html">Form</a></li>
                                                            <li><a href="elements-buttons.html">Buttons</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="uk-width-2-5">
                                            <div className="uk-panel uk-panel-box">
                                                <div className="tm-imgtext-block-text">
                                                    <h3 className="uk-panel-title">About Me</h3>My name is Cristiane Abreu. I am a Web Developer and Web Marketing Analyst. I am passionate in regards to my dedication to deliver digital marketing plans with innovative strategies that will boost your website’s rank on search engine results pages.
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                <div className="uk-width-1-1 uk-container">

                                    <div className="tm-footer-social-menu">
                                        <ul className="uk-subnav uk-flex-center">
                                            <li><a title="Follow us on Facebook" target="_blank" href="https://www.facebook.com/people/Affordable-Website-Online-Marketing/100066757076765/"><span className="uk-icon-instagram"></span> Instagram</a></li>
                                            <li><a title="visit github" target="_blank" href="https://github.com/Cristiane11"><span className="uk-icon-github"></span> Github</a></li>
                                            <li><a title="visit github" target="_blank" href="https://github.com/Cristiane11"><span className="uk-icon-linkedin"></span> linkedin</a></li>

                                        </ul>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>

                </section>


            </footer>
        </>
    )
}

export default Footer