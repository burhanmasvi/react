import { Fragment } from "react";
import mealImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
   return  (<Fragment>
     <header className={classes.header}>
        <h1>React Meals</h1>
        < HeaderCartButton onClick={props.onShowCart} />
     </header>
    <div className={classes['main-image']}>
        <img src={mealImg} alt="A table full of food" /> 
    </div>

   </Fragment>
   );
}
export default Header