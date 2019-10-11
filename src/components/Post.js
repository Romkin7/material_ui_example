import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Card, CardContent, CardMedia } from "@material-ui/core";

const Post = ({ match, data }) => {
    const post = data.find(post => post.id == match.params.id); 
    return (
        <main>
            <Grid container>
                <Grid item xs="8">
                    <Typography variant="h1">
                        {post.title}
                    </Typography>
                    <Card>
                        <CardMedia>
                            <img src={post.image} alt={post.title} />
                        </CardMedia>
                    </Card>
                </Grid>
            </Grid>
        </main>
    )
};

export default Post;