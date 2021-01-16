import { AppBar, Toolbar, Link, makeStyles, Button } from "@material-ui/core";
import { CallToAction } from "@material-ui/icons";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    header: {
        backgroundColor: "#b0f6b6ff",
        color: "#000000",
        fontFamily: "Roboto, sans-serif",
        paddingRight: "3px",
        paddingLeft: "5%",
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
    },
    menuButtons: {
        fontWeight: 700,
        marginLeft: "auto",
    },
    logo: {
        paddingTop: "4px",
        paddingRight: "10px"
    },
    height: {
        height: "64px"
    }
}));

export default function Header() {

    const { toolbar, header, title, menuButtons, logo, height } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            {directTitle()}
            <div className={menuButtons}>{getMenuButtons()}</div>
        </Toolbar>;
    };

    const directTitle = () => {
        return <Link className={title}
            {...{
                component: RouterLink,
                to: "/",
                color: "inherit",
                style: { textDecoration: "none" },
                variant: "h5",
            }}
        >
            <div className={logo}><CallToAction /></div>
            <div>Direct</div>
        </Link>
    };

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <div className={height}>
        <AppBar className={header}>{displayDesktop()}</AppBar>
        </div>
    );
}

const headersData = [
    {
        label: "Account",
        href: "/account",
    }
];