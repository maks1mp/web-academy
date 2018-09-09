import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        const {defaultValue = 0} = props;

        this.state = {
            value: defaultValue
        };
    }

    decrease = () => this.setState({value: this.state.value - (this.props.step || 1)})

    increase = () => this.setState({value: this.state.value + (this.props.step || 1)})

    render() {
        const {value} = this.state;

        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <b>{value}</b>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}

export default Counter;