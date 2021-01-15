import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner'

class APP extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null, errormessage: null };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errormessage: err.message });
            }
        );
    }
    render() {

        if (this.state.errormessage && !this.state.lat) {
            return <div> error:{this.state.errormessage} </div>;
        }
        if (!this.state.errormessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <Spinner message="please accept location request " />;
    }
}
ReactDOM.render(
    <APP />,
    document.querySelector('#root')

)