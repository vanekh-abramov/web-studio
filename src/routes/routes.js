import { HOME, ERROR, PRICE_LIST, PORTFOLIO, ABOUT_US } from '../constants/routerLinks'
import Portfolio from '../pages/Portfolio/Portfolio'
import PriceList from '../pages/PriceList/PriceList'
import AboutUs from '../pages/aboutUs/AboutUs'
import Home from '../pages/home/Home'


export const publicRoutes = [
  {
    path: HOME,
    Component: Home
  },
  {
    path: PRICE_LIST,
    Component: PriceList
  },
  {
    path: ERROR,
    Component: Error
  },
  {
    path: PORTFOLIO,
    Component: Portfolio
  },
  {
    path: ABOUT_US,
    Component: AboutUs
  }
]