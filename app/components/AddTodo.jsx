var React = require('react');

var AddTodo = React.createClass({
    onAddNewTodo: function(e) {
        e.preventDefault();
        var todo = this.refs.todo.value;
        if(todo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddTodo(todo);
        } else {
            this.refs.todo.focus();
        }
    },
    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.onAddNewTodo}>
                    <input type="text" ref="todo" placeholder="add something..."/>
                    <button className="button expanded">Add New Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
