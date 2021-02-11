import React, { Component } from "react";
import ParaButton from "../components/ParaButton";
import {Container,Grid,CircularProgress} from '@material-ui/core';

class Dashboard extends Component {
    state = { showLoader: false,disabled:false }

    loader = () => {
        this.setState({
            showLoader: !this.state.showLoader,
            disabled:!this.state.disabled
        })
        setTimeout(() => {
            this.setState({
                showLoader: !this.state.showLoader,
                disabled:!this.state.disabled
            })
        }, 2000);
    }

    render() {
        return (
            <>
                <Container maxWidth="sm">
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        //justify="center"
                        style={{ paddingTop: '50vh'}}
                    >
                        <ParaButton disabled={this.state.disabled} loader={this.loader} variant="contained" color="primary">Click Me!</ParaButton>
                        {
                            this.state.showLoader ? <CircularProgress />
                                : null
                        }
                    </Grid>
            </Container>
            </>
        );
    }
}

export default Dashboard;