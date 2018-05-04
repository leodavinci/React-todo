var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');
var TodoAPI = require('TodoAPI');

var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchText} = this.props;
        if(todos.length === 0) {
            return (
                <p className="container__message">Nothing to do</p>
            );
        }
        var renderTodos = () => {
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };
        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);
