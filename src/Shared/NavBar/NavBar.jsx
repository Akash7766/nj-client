import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';



const NavBar = () => {
  const { user, logOut } = useAuth();


  return (
    <>



      <div >
        <div className="tm-toolbar uk-clearfix">


          <a href="#offcanvas" className="uk-navbar-toggle uk-hidden-large" data-uk-offcanvas></a>


          <div className="uk-container-center">

            <div className="uk-flex uk-flex-space-between uk-flex-middle">
              <div>
                <a className="tm-logo" href="/"><img src="assets/logo.png" alt="" /></a>
              </div>
              <div className="uk-navbar-content uk-visible-large">
                <ul className="uk-navbar-nav">

                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/about'}>About</Link></li>
                  <li><Link to={'/projects'} >Projects</Link></li>
                  <li><Link to={'/contacts'} >Contacts</Link></li>
                  <li><Link to={'/blog'} >Blog</Link></li>
                  {
                    user.email && <li><Link to={'/dash-board'}> Dashboard</Link></li>
                  }
                  {
                    user?.email ? <li><button className='btn btn-danger' onClick={logOut}>logout</button></li> : <li><Link to={'/login'} >Login</Link></li>
                  }

                </ul>
              </div>

              <div className="uk-panel tm-search-button">
                <a href="#search-modal" data-uk-modal>
                  <span className="tm-icon-search"></span>
                </a>
              </div>

            </div>
          </div>




        </div>

      </div>
      <div id="offcanvas" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
          <div class="uk-panel">
            <h3 class="uk-panel-title">Menu</h3>
            <ul class="uk-nav uk-nav-offcanvas">
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/projects'} >Projects</Link></li>
              <li><Link to={'/contacts'} >Contacts</Link></li>

              <li><Link to={'/blog'} >Blog</Link></li>
              {
                user.email && <li><Link to={'/dash-board'}> Dashboard</Link></li>
              }
              {
                user?.email ? <li><button className='btn btn-danger' onClick={logOut}>logout</button></li> : <li><Link to={'/login'} >Login</Link></li>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar