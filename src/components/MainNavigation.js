import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";

const userStyles = makeStyles({
    listItem: {
        display: "inline-block",
        width:150,
        textAlign: "right",
        color: "white"
    }
});

const listItems = [
    {
        text: "Posts",
        id: 1,
        url: "/posts"
    },
    {
        text: "Prices",
        id: 2,
        url: "/prices"
    },
    {
        text: "Contact",
        id: 3,
        url: "/contact"
    }
]

const MainNavigation = () => {
    const classes = userStyles();
    return (
        <List component="nav">
            {listItems.map((item) => {
                return(
                    <Link key={item.id} to={item.url}><ListItem className={classes.listItem}>
                        <ListItemText>
                            <Typography>{item.text}</Typography>
                        </ListItemText>
                    </ListItem></Link>
                )
            })}
        </List>
    )
};

export default MainNavigation;