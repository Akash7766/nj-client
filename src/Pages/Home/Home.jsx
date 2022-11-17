import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainSection from '../../Components/MainSection/MainSection'
import MyBlogs from '../../Components/MyBlogs/MyBlogs'
import SingleBlog from '../../Components/Single-Blog/SingleBlog'
import Footer from '../../Shared/Footer/Footer'

const Home = () => {


    return (
        <div id='tm-wrapper'>
            <HeroSection />
            <MainSection />
            {/* <MyBlogs /> */}



            <Footer />
        </div>

    )
}

export default Home