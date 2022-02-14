import React from 'react'

import { Link } from 'react-router-dom'

import Grid from './Grid'

import logo from '../assets/images/Logo-2.png'

const footerAboutLinks = [
  {
    display: "Gioi thieu",
    path: "/about"
  },
  {
    display: "Lien he",
    path: "/about"
  },
  {
    display: "Tuyen dung",
    path: "/about"
  },
  {
    display: "Tin thru",
    path: "/about"
  },
  {
    display: "He thongu",
    path: "/about"
  }
]

const footerCustomerLink = [
  {
    display: "chine sach doi tra",
    path: "/about"
  },
  {
    display: "Chinh sach bao hanh",
    path: "/about"
  },
  {
    display: "Chin sach hoan tien",
    path: "/about"
  }
]


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Grid
            col = {4}
            mdCol = {2}
            smCol = {1}
            gap = {10}
        >
          <div>
              <div className='footer__title'>
                Tongdai ho try
              </div>
              <div className='footer__content'>
                <p>
                  Lien he dat hang <strong>012345678</strong>
                </p>
                <p>
                 Tac mac dong hang <strong>012345678</strong>
                </p>
                <p>
                 Gop y, khieu nai <strong>012345678</strong>
                </p>
              </div>
          </div>
          <div>
              <div className='footer__title'>
                Ve Yolo
              </div>
              <div className='footer__content'>
                {
                  footerAboutLinks.map((item, index) => (
                    <p key={index}>
                      <Link to={item.path}>
                        {item.display}
                      </Link>
                    </p>
                  ))
                }
              </div>
          </div>
          <div>
              <div className='footer__title'>
                cham soc chac hang
              </div>
              <div className='footer__content'>
                {
                  footerCustomerLink.map((item, index) => (
                    <p key={index}>
                      <Link to={item.path}>
                        {item.display}
                      </Link>
                    </p>
                  ))
                }
              </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt=""/>
              </Link>
            </p>
            <p>
              A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
            </p>
          </div>
        </Grid>    
      </div>
    </footer>
  )
}

export default Footer