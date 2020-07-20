import React from 'react';
import { withRouter } from "react-router";


class SelectedBreed extends React.Component {

    state = {
        imageUrl: ''
    }

    componentDidMount() {
        this.fetchUrl(this.props.match.params.breedNameAsd)
    }

    componentDidUpdate() {
        this.fetchUrl(this.props.match.params.breedNameAsd)

    }

    async fetchUrl(urlbreedNameUrl) {
        if (!urlbreedNameUrl) return;
        const response = await fetch(`https://dog.ceo/api/breed/${urlbreedNameUrl}/images`);
        const data = await response.json();
        const imageUrl = data.message[0];
        this.setState({
            imageUrl
        })
    }

    render() {
        return (
            <>
                <div>
                    {this.state.imageUrl ? <img src={this.state.imageUrl} /> : <div>Loading...</div>}
                </div>
            </>
        )
    }
}

export default withRouter(SelectedBreed)