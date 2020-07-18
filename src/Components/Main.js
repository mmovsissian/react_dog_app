import React from "react";
import Breeds from "./Breeds";
import SelectedBreed from "./SelectedBreed";

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
                <div>Main</div>
                <div style={{ display: 'flex' }}>
                    {this.state.isFetched ? <Breeds array={this.state.breeds} onBreedsClick={this.onBreedChange} /> : <div>Loading</div>}
                    {this.state.selectedBreed && <SelectedBreed breedName={this.state.selectedBreed} />}
                </div>

            </div>
        )
    }

}

export default Main