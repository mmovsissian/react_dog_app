import React from "react";
import Breeds from "./Breeds";
import SelectedBreed from "./SelectedBreed";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

class Main extends React.Component {

    state = {
        isFetched: false,
        breeds: [],
        selectedBreed: ''
    }

    async componentDidMount() {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json()
        const breedsArray = Object.keys(data.message)
        this.setState({
            breeds: breedsArray,
            isFetched: true
        })
    }

    onBreedChange = (breed) => {
        this.setState({
            selectedBreed: breed
        })
    }


    render() {
        return (
            <div>
                <div style={{ display: 'flex' }}>
                    {this.state.isFetched ? <Breeds array={this.state.breeds} onBreedsClick={this.onBreedChange} /> : <div>Loading</div>}
                    <Switch>
                        <Route exact path={this.props.match.path}>
                            <div>Please select breed</div>
                        </Route>
                        <Route path={`${this.props.match.path}/:breedNameAsd`}>
                            <SelectedBreed />
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }

}

export default withRouter(Main)