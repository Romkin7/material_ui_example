import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Button, Typography, CardActions, Grid } from "@material-ui/core";

import { posts } from "./postsData";

const useStyles = makeStyles({
    gridContainer: {
        padding: "3rem",
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    gridItem: {
        padding: "1.2rem",
        borderRadius: "2rem"
    },
    cardMedia: {
        height: "35vh"
    }
});

const Posts = ({ match }) => {
    const classes = useStyles();
    return (
        <main>
        <Grid container className={classes.gridContainer} spacing={3}>
            {posts.map((post) => {
                return(
                    <Grid key={post.id} item xs={3} className={classes.gridItem}>
                        <Card className={classes.gridItem}>
                            <CardMedia image={post.image} component="img" alt={post.title} height="250px" />
                            <CardContent>
                                <Typography variant="h4">
                                    {post.title}
                                </Typography>
                                <Typography variant="caption">
                                    {post.text.substring(0, 30)}...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined" color="secondary">Do something</Button>
                                <Link to={`${match.url}${post.id}`}><Button variant="outlined" color="primary">View</Button></Link>
                            </CardActions>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>
        </main>
    )
}

export default withRouter(Posts);