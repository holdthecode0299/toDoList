import React, { Component } from 'react'

class ToDoList extends Component {
    
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        return (
            <div className="list">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        {/* adds item, value stored as text, read/write only */}
                        <input 
                            placeholder="To-Do" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput} 
                        />
                        <button type="submit"> Add Item</button>
                    </form>
                </div>
            </div>
        )

    }
   
}

export default ToDoList 