import React, { Component } from 'react';
import edit from '../imgs/edit.png';
import check from '../imgs/check-mark.png';
import checked from '../imgs/check.png';
import deleteImg from '../imgs/delete.png';


class Body extends Component {
    constructor(props) {
        super(props);
        this.myInput = React.createRef();
    }

    eventEnter(e) {
        let value = this.myInput.current.value;
        if (e.key === "Enter") {
            if (value.trim().length === 0) {
                return;
            } else {
                this.props.addItem(value);
                this.myInput.current.value = '';
            }  
        }
    }

    clickAddItem(e) {
        let value = this.myInput.current.value;
        if (value.trim().length === 0) {
            return;
        } else {
            this.props.addItem(value);
            this.myInput.current.value = '';
        }
    }

    onCheck(index) {
        this.props.onCheck(index);
    }

    removeItem(index) {
        this.props.removeItem(index);
    }

    render() {

        let items = this.props.items;
        let itemsTodo = items.map((item, index) => {
            return (
                <div className="item-todo" key={index}>
                    <img src={!item.complete ? check : checked}
                        alt={check}
                        onClick={() => {this.onCheck(index)}} />
                    <p style={items[index].complete ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}> {item.content} </p>
                    <img src={deleteImg} alt={deleteImg} onClick={() => {this.removeItem(index)}} />
                </div>
            )
        })
        return (
            <section className="body-todo">
                <div className="todo-input">
                    <input
                        type="text"
                        placeholder="Add task"
                        onKeyUp={(e) => {this.eventEnter(e)}}
                        ref={this.myInput} />
                    <img src={edit} alt="edit" onClick={(e) => {this.clickAddItem(e)}} />
                </div>
                <div className="todo-output">
                    {items.length === 0
                        ? <p className="none-item">You're all caught up!</p>
                        : itemsTodo}
                </div>
            </section>
        )
    }
}

export default Body;
