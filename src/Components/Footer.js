import React, { Component } from 'react';


class Footer extends Component {
    

    render() {
        let { task, complete, open } = this.props;
        return (
            <section className="footer-todo">
                <span>{ task >= 2 ? `${task} tasks` : `${task} task` }</span>
                <span>{ complete >=2 ? `${complete} completes` : `${complete} complete`}</span>
                <span>{open >= 2 ? `${open} opens` : `${open} open`}</span>
            </section>
        )
    }
}

export default Footer;
