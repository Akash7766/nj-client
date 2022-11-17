import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">

                        <div className="navbar-brand-box">
                            <Link to={"/"} className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" style={{ height: 24 }} />
                                </span>
                                <span className="logo-lg">
                                    <img src="assets/images/logo.png" alt="" style={{ height: 24 }} /> <span className="logo-txt">NJ Abaacorp</span>
                                </span>
                            </Link>

                            <Link to={'/'} className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="assets/images/logo-sm.svg" alt="" style={{ height: 24 }} />
                                </span>
                                <span className="logo-lg">
                                    <img src="" alt="" style={{ height: 24 }} /> <span className="logo-txt">NJ Abaacorp</span>
                                </span>
                            </Link>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        {/* 
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <button className="btn btn-primary" type="button"><i className="bx bx-search-alt align-middle"></i></button>
                            </div>
                        </form> */}
                    </div>

                    <div className="d-flex">

                        {/* <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item" id="page-header-search-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="search" className="icon-lg"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">

                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result" />

                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img id="header-lang-img" src="assets/images/flags/us.jpg" alt="Header Language" style={{ height: 16 }} />
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">


                                <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="en">
                                    <img src="assets/images/flags/us.jpg" alt="user-image" className="me-1" style={{ height: '12px' }} /> <span className="align-middle">English</span>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="sp">
                                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" style={{ height: '12px' }} /> <span className="align-middle">Spanish</span>
                                </a>


                                <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="gr">
                                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" style={{ height: '12px' }} /> <span className="align-middle">German</span>
                                </a>


                                <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="it">
                                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" style={{ height: '12px' }} /> <span className="align-middle">Italian</span>
                                </a>


                                <a href="javascript:void(0);" className="dropdown-item notify-item language" data-lang="ru">
                                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" style={{ height: '12px' }} /> <span className="align-middle">Russian</span>
                                </a>
                            </div>
                        </div>

                        <div className="dropdown d-none d-sm-inline-block">
                            <button type="button" className="btn header-item" id="mode-setting-btn">
                                <i data-feather="moon" className="icon-lg layout-mode-dark"></i>
                                <i data-feather="sun" className="icon-lg layout-mode-light"></i>
                            </button>
                        </div>

                        <div className="dropdown d-none d-lg-inline-block ms-1">
                            <button type="button" className="btn header-item"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="grid" className="icon-lg"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                <div className="p-2">
                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/github.png" alt="Github" />
                                                <span>GitHub</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                                                <span>Bitbucket</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                                                <span>Dribbble</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row g-0">
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                                                <span>Dropbox</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                                                <span>Mail Chimp</span>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a className="dropdown-icon-item" href="#">
                                                <img src="assets/images/brands/slack.png" alt="slack" />
                                                <span>Slack</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="bell" className="icon-lg"></i>
                                <span className="badge bg-danger rounded-pill">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="#!" className="small text-reset text-decoration-underline"> Unread (3)</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{ maxHeight: '230px' }} >
                                    <a href="#!" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">James Lemire</h6>
                                                <div className="font-size-13 text-muted">
                                                    <p className="mb-1">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#!" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 avatar-sm me-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Your order is placed</h6>
                                                <div className="font-size-13 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#!" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 avatar-sm me-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Your item is shipped</h6>
                                                <div className="font-size-13 text-muted">
                                                    <p className="mb-1">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="#!" className="text-reset notification-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="user-pic" />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h6 className="mb-1">Salena Layfield</h6>
                                                <div className="font-size-13 text-muted">
                                                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span>1 hour ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top d-grid">
                                    <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                                        <i className="mdi mdi-arrow-right-circle me-1"></i> <span>View More..</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item right-bar-toggle me-2">
                                <i data-feather="settings" className="bi bi-gear-fill"></i>
                            </button>
                        </div> */}
                        <div className="dropdown d-inline-block">
                            {user ?
                                <div className="">
                                    <button type="button" className="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                                            alt="Header Avatar" />
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium">{user ? user.displayName : 'user'}</span>
                                        <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-end">

                                        <a className="dropdown-item" to={'/profile'}><i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i> Profile</a>

                                        <div className="dropdown-divider"></div>
                                        <Button className="dropdown-item" onClick={logOut} ><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</Button>
                                    </div>
                                </div>


                                : <Link to={'/login'} ><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Login</Link>
                            }

                        </div>
                    </div>
                </div>
            </header>


        </div>
    )
}

export default Header