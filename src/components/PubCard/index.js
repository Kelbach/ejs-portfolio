import React from "react";

function PubCard(props) {

    return(
        <div className='card' style={{width: '20rem', margin: '1rem'}}>
            <div className='card-body d-flex flex-column'>
                <a style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href={"https://ui.adsabs.harvard.edu/#abs/"+props.bibcode+"/abstract"}>
                    <h5 className='row card-title alert alert-dark'>{props.title}</h5>
                </a>
                <ul className='card-text'>Authors:
                    <li className='list-item'>{props.authors[0]}</li>
                    <li className='list-item'>{props.authors[1]}</li>
                    <li className='list-item'>{props.authors[2]}</li>
                </ul>
                {props.issue ? <p className='card-text mt-auto'>Issue #{props.issue}</p> : <></>}
                {props.volume ? <p className='card-text mt-auto'>Volume #{props.volume}</p> : <></>}
                <p className='card-text mt-auto'>Page {props.page}</p>
                {props.pubdate ? <p className='card-text mt-auto'>Date Published: {props.pubdate}</p> : <></>}
                <p className="small align-self-end mt-auto">{props.bibcode}</p>
            </div>
        </div>
    );

}

export default PubCard;