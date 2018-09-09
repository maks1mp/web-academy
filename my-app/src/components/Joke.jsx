const URL = 'http://api.icndb.com/jokes/random';

class Joke extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joke: null
        };
    }

    componentDidMount() {
        this.requestJoke();
    }

    requestJoke = () => {
        this.setState({joke: null});

        fetch(URL)
            .then(response => response.json())
            .then(data => this.setState({joke: data.value.joke}));
    }

    render() {
        const {joke, counter} = this.state;

        return (
            <div style={{background: this.props.bgc}}>
                <h1>{counter}</h1>
                {joke || 'Loading...'}
                <button onClick={this.requestJoke}>
                    REQUEST NEW
                </button>
            </div>
        );
    };
}