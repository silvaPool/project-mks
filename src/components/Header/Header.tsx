import { FunctionComponent } from "react";
import classes from './header.module.scss';
import { Link } from "@mui/material";
import logo from '../../assets/logo.svg';
import { CartWidget } from "../../CartWidget";
import useLocalStorageState from "use-local-storage-state";

export const Header: FunctionComponent = () => {

    const [cart,] = useLocalStorageState<CartProps>('cart', {})

    const productsCount: number = Object.keys(cart || {}).length

    return (
        <header className={classes.header}>
            <div>
                <Link href="/">
                    <img src={logo} className={classes.logo} alt="Shopping Cart Application" />
                </Link>
            </div>
            <div>
                <CartWidget productsCount={productsCount} />
            </div>
        </header>
    )
}