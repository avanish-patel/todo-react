import React from 'react';


class AddTodo extends React.Component {

    state = {
        content : null
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="todo" onChange={this.handleChange} placeholder="What's in your mind?"></input>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;