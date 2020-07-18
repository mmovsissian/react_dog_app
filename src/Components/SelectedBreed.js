import React from 'react';

export default class SelectedBreed extends React.Component {

    state = {
        imageUrl: ''
    }

    componentDidMount() {
        this.fetchUrl(this.props.breedName)
    }

    componentDidUpdate(prev) {
        if (prev.breedName != this.props.breedName) {
            this.fetchUrl(this.props.breedName)
        }
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
                {this.props.breedName && (
                    <div>
                        {this.state.imageUrl ? <img src={this.state.imageUrl} /> : <div>Loading...</div>}
                    </div>
                )}
            </>
        )
    }
} 