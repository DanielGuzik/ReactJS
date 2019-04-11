import React, { Component } from "react"
import './footer.css'

class Footer extends Component {

    render() {
        return (
            <footer className='footer'>
                <div className="footer-wrapper">
                    © {new Date().getFullYear()},{` `}
                    <a href="https://google.com">{this.props.siteAuthor}</a>
                </div>
            </footer>
        );
    }
}

export default Footer