import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Prices = () => {
    return (
        <main>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h1" color="primary">
                        Prices
                    </Typography>
                </Grid>
            </Grid>
        </main>
    )
};

export default Prices;