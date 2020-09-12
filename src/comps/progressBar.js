import React,{ useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import '../index.css';

const ProgressBar = (file,setFile)=>{
    const {url,progress} = useStorage(file);
     
    useEffect(()=>{
        if(url){
         setFile(null);   
        }
    },[url,setFile]);
    return(
        <div class="progress-bar" style={{width : progress+'%'}}>
            progress
        </div>
    )
}

export default ProgressBar;