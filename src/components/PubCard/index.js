import React from "react";



function PubCard(props) {

    return(
        <div className='card' style={{width: '20rem', margin: '1rem', zIndex:'2'}}>
            <div className='card-body d-flex flex-column'>
                <a style={{textDecoration: 'none'}} target="_blank" rel="noreferrer" href={"https://ui.adsabs.harvard.edu/#abs/"+props.bibcode+"/abstract"}>
                    <h5 style={{height: '130px'}} className='row card-title alert alert-dark'>{props.title}</h5>
                </a>
                <u>Authors:</u>
                <ul className='card-text'>
                    <li className='list-item'>{props.authors[0]}</li>
                    {
                        (props.authors[0].includes("Safron")||props.authors[1].includes("Safron")) ?
                        <li className='list-item'>{props.authors[1]}</li> : 
                        <li className='list-item'>et al.</li>
                    }
                    {
                        props.authors.length!==3 ?
                            (props.authors.length > 2 ? 
                                ((props.authors[0].includes("Safron")||props.authors[1].includes("Safron")) ?
                                <li className='list-item'>et al.</li> : 
                                <li className='list-item'>Safron, Emily J.</li> ) :
                            <p></p>) :
                        <li className='list-item'>{props.authors[2]}</li>
                    }
                </ul>
                {props.issue ? <p className='card-text mb-auto'>Issue #{props.issue}</p> : <p></p>}
                {props.volume ? <p className='card-text mb-auto'>Volume #{props.volume}</p> : <p></p>}
                <p className='card-text mb-auto'>Page {props.page}</p>
                {props.pubdate ? <p className='card-text mb-auto'>Date Published: {props.pubdate}</p> : <p></p>}
                <p className="small align-self-end mb-0">{props.bibcode}</p>
            </div>
        </div>
    );

}

export default PubCard;