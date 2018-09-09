import React from 'react';

const initialState = [
    {
        title: 'Learn JS',
        done: false,
        id: 12353213
    },
    {
        title: 'Learn ReactJs',
        done: false,
        id: 12352
    },
    {
        title: 'Learn NodeJS',
        done: false,
        id: 12
    }
];

class TaskForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    handleInput = e => {
        const {value} = e.target;

        this.setState({value});
    }

    handleSubmit = e => {
        e.preventDefault();

        const {onAdd} = this.props;

        if (this.state.value) {
            onAdd({title: this.state.value});

            this.setState({value: ''});
        }
    }

    render () {
        const {value} = this.state;

        return (
            <form action="" onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>New Task:</legend>
                    <label>
                        <span>Name</span>
                        <input
                            type="text"
                            value={value}
                            onChange={this.handleInput}/>
                    </label>
                    <button>Add task</button>
                </fieldset>
            </form>
        );
    }
}

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {tasks: initialState};
    }

    removeTask = task => () => {
        const {tasks} = this.state;

        this.setState({tasks: tasks.filter(t => t.id !== task.id)});
    }

    renderTask = task => {
        return (
            <li key={task.id}>
                {task.title}
                <button onClick={this.removeTask(task)}>
                    remove
                </button>
            </li>
        );
    }

    addTask = taskData => {
        const task = {
            ...taskData,
            done: false,
            id: Date.now()
        };

        this.setState({tasks: [...this.state.tasks, task]});
    }

    render() {
        const {tasks} = this.state;

        return (
            <div>
                <TaskForm onAdd={this.addTask}/>
                <ul>
                    {tasks.map(this.renderTask)}
                </ul>
            </div>
        );
    }
}