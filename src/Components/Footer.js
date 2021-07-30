import React, {Component} from 'react';


export default class Footer extends Component{
    render(){

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="cc">
                            <li>&copy; Copyright 2021 Enzo Sperduti</li>
                        </ul>
                    </div>
                    <div id="scrollup"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
                </div>
            </footer>
        );

    }
}