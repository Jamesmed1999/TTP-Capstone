import React, { Component, useState } from 'react'
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar, } from 'semantic-ui-react'
import { connect, useSelector, useDispatch } from 'react-redux'   // extracts the reducers, dispatch an action
import { hidden, visible } from '../actions/index'       // import command to add
import store from '../store/index'
import App from '../App'
import MovieCard from './MovieCard'

const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=a65f9b291a589567b929f15ba75cf51a&language=en-US"

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            genreId: ''
        }

        this.setGenre = this.setGenre.bind(this)
        this.onClickCollapseSideBar = this.onClickCollapseSideBar.bind(this)

        store.subscribe(() => {
            let visible = store.getState().visible
            this.setState({ visible })
        })

    }

    onClickCollapseSideBar(event) {
        if (event === true) {
            this.props.dispatch(visible())
        } else {
            this.props.dispatch(hidden())
        }
    }

    componentDidMount() {
        console.log(store.getState())
    }

    //[name, setGenres]=useState([])

    getGenres = () => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a65f9b291a589567b929f15ba75cf51a&with_genres=" + genreId)
            .then((res) => res.json())
            .then((data) => {
                setGenre(data.genre_ids)
            })
    }

    // GenreId = ({ name }) => {
    //     <App />
    // }

    render() {
        return (
            < Grid columns={1} >
                <Grid.Column>
                    <Checkbox
                        checked={this.state.visible}
                        label={{ children: <code><b>Genres</b></code> }}
                        onChange={(e, data) => this.onClickCollapseSideBar(data.checked)}
                    />
                </Grid.Column>

                <Grid.Column>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => this.onClickCollapseSideBar(false)}
                        vertical
                        visible={this.state.visible}
                        width='thin'
                    >
                        <Menu.Item position='left'>
                            <h3>Genres</h3>
                        </Menu.Item>

                        <Menu.Item as='a'
                        //onClick={<>}
                        >
                            Action <br /><br /> {/* 28 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Adventure <br /><br /> {/* 12 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Animation <br /><br /> {/* 16 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Comedy <br /><br /> {/* 35 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Crime <br /><br /> {/* 80 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Documentary <br /><br /> {/* 99 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Drama <br /><br /> {/* 18 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Family <br /><br /> {/* 10751 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Fantasy <br /><br /> {/* 14 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            History <br /><br /> {/* 36 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Horror <br /><br /> {/* 27 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Music <br /><br /> {/* 10402 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Mystery <br /><br /> {/* 9648 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Romance <br /><br /> {/* 10749 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Science Fiction <br /><br /> {/* 878 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            TV Movie <br /><br /> {/* 10770 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Thriller <br /><br /> {/* 53 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            War <br /><br /> {/* 10752 */}
                        </Menu.Item>
                        <Menu.Item as='a'>
                            Western <br /><br /> {/* 37 */}
                        </Menu.Item>
                    </Sidebar>
                </Grid.Column>

            </Grid >

        )
    }
}

export default connect()(SideBar)