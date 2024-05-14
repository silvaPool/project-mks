import { FunctionComponent } from "react";
import classes from './header.module.scss';
import { Link } from "@mui/material";

export const Header: FunctionComponent = () => {
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