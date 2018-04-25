var React = require('react');

var Todo = React.createClass({
    handleClick: function() {
        var {id} = this.props;
        this.props.onToggle(id);
    },
    render: function() {
        var {id, text, completed} = this.props;
        return (
            <div onClick={this.handleClick}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
});

module.exports = Todo;
