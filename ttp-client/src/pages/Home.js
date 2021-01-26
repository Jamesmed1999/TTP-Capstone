//need to make grid dynamic

import React from 'react'
import MovieCard from '../components/MovieCard'
import { Grid, Image } from 'semantic-ui-react'
//import {useQuery}from '@apollo/react-hooks'
import { AuthContext } from '../context/auth'
import Review from '../scrapped/Review'
//import {FETCH_REVIEWS_QUERY}from'util/grapql'

function Home() {
    /* const { user } = useContext(AuthContext);
    const {
        loading,
        data: { getReviews: reviews } = {},
    } = useQuery(FETCH_REVIEWS_QUERY); */

    return (
        <div>
            <h1>Home</h1>
            {/* <MovieCard/> */}
            <Grid container columns={4}>
                <Grid.Column>
                    <MovieCard />
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default Home;