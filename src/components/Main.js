import React, { useState } from 'react';
import TrailerSection from './TrailerSection';
import DetailsSection from './DetailsSection';
import MoviesSection from './movieSectionComp/MoviesSection';

function Main() {
    const [showTrailer, setshowTrailer] = useState(false);
    const [showDetails, setshowDetails] = useState(false);
    const [payload,setPayload]= useState('');


    const trailersHandler = (isvideoActive,trailersPayload) => {
        setshowTrailer(isvideoActive);
        setPayload(trailersPayload);
    }

    const detailsHandler = (isdetailActive,detailsPayload) => {
        setshowDetails(isdetailActive);
        setPayload(detailsPayload);
    }

    if (showTrailer == false && showDetails == false) {
        return (<div><MoviesSection trailersHandler= {trailersHandler} detailsHandler ={detailsHandler} /></div>);
    }
    else if (showTrailer == true) {
        return (<div><TrailerSection trailersHandler= {trailersHandler} trailersPayload={payload}/></div>);
    }
    else if (showDetails == true)
    {
        return (<div><DetailsSection trailersHandler= {trailersHandler} detailsHandler ={detailsHandler}  detailsPayload={payload}/></div>);
    }
}

export default Main;
