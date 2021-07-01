import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    content: 'This is a test 1',
                    complete: false
                },
                {
                    content: 'This is a test 2',
                    complete: true
                },
                {
                    content: 'This is a test 3',
                    complete: false
                },
            ],
            task: null,
            complete: null,
            open: null,

        }

    }

    componentDidMount() {
        let completed = this.state.items.filter((item) => item.complete === true);
        let open = this.state.items.filter((item) => item.complete === false);
        this.setState({
            task: this.state.items.length,
            complete: completed.length,
            open: open.length,
        });
    }

    addItem = (item) => {
        const { complete, open, items, task } = this.state;
        let newItem = {
            content: item,
            complete: false,
        }
        let newComplete = newItem.complete ? complete + 1 : complete;
        let newOpen = newItem.complete ? open : open + 1;
        this.setState({
            items: items.concat(newItem),
            task: task + 1,
            complete: newComplete,
            open: newOpen,
        })
    }

    onCheckImg = (index) => {
        const { complete, open, items } = this.state;
        let newItems = items;
        newItems[index].complete = !newItems[index].complete;
        let newComplete = newItems[index].complete ? complete + 1 : complete - 1;
        let newOpen = newItems[index].complete ? open - 1 : open + 1;
        this.setState({
            items: newItems,
            complete: newComplete,
            open: newOpen,
        })
    }

    removeItem = (index) => {
        const { complete, open } = this.state;
        let itemRemove = this.state.items[index];
        let newComplete = itemRemove.complete ? complete - 1 : complete;
        let newOpen = itemRemove.complete ? open : open - 1;
        this.state.items.splice(index, 1);
        this.setState({
            items: this.state.items,
            task: this.state.task - 1,
            complete: newComplete,
            open: newOpen
        })
    }

    render() {
        return (
            <div className="app">
                <Header />
                <Body items={this.state.items} addItem={this.addItem} onCheck={this.onCheckImg}
                    removeItem={this.removeItem}/>
                <Footer task={this.state.task} complete={this.state.complete}
                    open={this.state.open} />
            </div>
        )
    }
}

export default App;
