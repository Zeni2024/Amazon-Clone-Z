import React, { useContext } from 'react'
import classes from "./Header.module.css"
import { Link } from 'react-router-dom';
import {SlLocationPin} from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';


function Header() {
    const [{ basket }, dispatch] = useContext(DataContext);
    const totalItem = basket?.reduce((amount, item) => {
      return item.amount + amount;
    }, 0);
// calculate the total amount of items in a basket using the reduce method. 

  return (
    <section className={classes.fixed}>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* logo */}
          <Link to="/">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.search}>
          {/* search bar */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="search product" />
          <BsSearch size={25} />
        </div>

        {/* right side link */}
        <div className={classes.order_container}>
          <Link to="#" className={classes.language}>
            <img
              src="https://pngimg.com/uploads/flags/flags_PNG14655.png"
              alt=""
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </Link>
          {/* three components */}
          <Link to="/auth">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>
          {/* orders */}
          <Link to="/orders">
            <p>returns</p>
            <span> & Orders</span>
          </Link>
          {/* cart */}
          <Link to="/cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{totalItem}</span>

            {/* {basket.length} */}
          </Link>
        </div>
      </div>
      <LowerHeader />
    </section>
  );
};

export default Header