import React, { Component } from 'react';

class Tasks extends Component {
    showTasks(item) {
        return (
            <li key={item.key} onClick={() => 
                this.props.deleteItem(item.key) } >
                {item.text}
            </li>
        )
            
    }

    // render() {
    //     const entries = this.props.entries
    //     // const listofItems = entries.map(this.showTasks)
    //     // return <ul className="showAll">{listOfItems}</ul>
    // }
}

export default Tasks