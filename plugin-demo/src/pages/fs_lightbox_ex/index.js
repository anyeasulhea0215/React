import React,{memo,useState} from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

import img1 from '../../assets/img/img1.png';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';

const FsLightboxExContainer=styled.div`
  .btn{
    border: 0;
    outline: none;
    cursor: pointer;
    padding: 0;
    margin: 0 5px;
  }
`;

const FsLightboxEx= memo(() =>{

    const [singleToggler,setSingleToggler]=useState(false);


    const [multiToggler,setMultiToggler]= useState({
        open:false,
        index:1
    });

    const [youtubeToggler,setYoutubeToggler]=useState(false);

    const [youtubeMultiToggler,setYoutubeMultiToggler]=useState({
        open:false,
        index:1
    });


    return(
      <FsLightboxExContainer>
        <h1>FsLightboxEx</h1>

        <h2> Single gallery</h2>

        <div>
          <button className="btn"  onClick={e=> {setSingleToggler(!singleToggler)  }} >
              <img  src={img1} width={150} alt="img1" />
          </button>
          <FsLightbox  sources={[img1]}  toggler={singleToggler} />

        </div>

        <h2> Multi Gallery</h2>
        <div>
            <button className="btn" onClick={e => {setMultiToggler ( {open: !multiToggler.open, index:1})   }} >
                <img src={img1} width={150} alt="img1" />
            </button>
            <button className="btn" onClick={e => {setMultiToggler ( {open: !multiToggler.open, index:2})   }} >
                <img src={img2} width={150} alt="img2" />
            </button>
            <button className="btn" onClick={e => {setMultiToggler ( {open: !multiToggler.open, index:3})   }} >
                <img src={img3} width={150} alt="img3" />
            </button>
            <button className="btn" onClick={e => {setMultiToggler ( {open: !multiToggler.open, index:4})   }} >
                <img src={img4} width={150} alt="img4" />
            </button>
            <button className="btn" onClick={e => {setMultiToggler ( {open: !multiToggler.open, index:5})   }} >
                <img src={img5} width={150} alt="img5" />
            </button>
            <FsLightbox  toggler={multiToggler.open} sources={[img1,img2,img3,img4,img5]} slide={multiToggler.index}  />
        </div>

        <h2> Youtube Single link</h2>

        <div>
            <button className="btn" onClick={e => setYoutubeToggler(!youtubeToggler)} >
                <img src='https://img.youtube.com/vi/3lZYvVRCWO0/hqdefault.jpg' width="150" alt="img1" />
            </button>
            <FsLightbox  toggler={youtubeToggler}  sources={["https://www.youtube.com/watch?v=3lZYvVRCWO0"]} />
        </div>

        <h2>Youtube Multi link</h2>
        <div>
             <button className="btn" onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:1 }) } >
                <img  src='https://img.youtube.com/vi/ofnp63sk8wM/hqdefault.jpg' width="150" alt="img1" />
            </button>
            <button className="btn" onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:2 }) } >
                <img  src='https://www.youtube.com/watch?v=0zfwYWHRWhQ/hqdefault.jpg' width="150" alt="img1" />
            </button>
            <button className="btn" onClick={e => setYoutubeMultiToggler({open: !youtubeMultiToggler.open, index:3 }) } >
                <img  src='https://www.youtube.com/watch?v=0zfwYWHRWhQ/hqdefault.jpg' width="150" alt="img1" />
            </button>
            <FsLightbox toggler={youtubeMultiToggler.open} sources={[
                "https://www.youtube.com/watch?v=ofnp63sk8wM",
   "https://www.youtube.com/watch?v=0zfwYWHRWhQ",
   "https://www.youtube.com/watch?v=0zfwYWHRWhQ"
            ]}  slide={youtubeMultiToggler.index}
            />
        </div>
      </FsLightboxExContainer>
    )
})

export default FsLightboxEx;