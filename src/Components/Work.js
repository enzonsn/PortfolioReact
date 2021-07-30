import React from 'react';

 export default function Work(props) {
    return(
        <div className="projects-outer">
            <a className="projects-link" href={props.url} target="_blank" rel="noreferrer">
                <figure className="projects-title" data-catagory={props.title}>
                    <img className="projects-img" src={props.img} alt=""/>
                    <figcaption>{props.bio}</figcaption>
                </figure>
            </a>
        </div>
    );
}
