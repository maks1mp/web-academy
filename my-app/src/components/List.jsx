import React from 'react';

class ListItem extends React.Component {
    render() {
        const {data} = this.props;

        return (
            <li className='item'>
                {data}
            </li>
        );
    }
}

class List extends React.Component {
    render() {
        const {items} = this.props;

        return (
            <ul>
                {items.map((item, index) => 
                    <ListItem data={item} key={index}/>)}
            </ul>
        );
    }
}

export default List;