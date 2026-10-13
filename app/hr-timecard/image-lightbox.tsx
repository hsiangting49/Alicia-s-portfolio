'use client';

import { useEffect, useState } from 'react';
import styles from './story.module.css';

export default function ImageLightbox({src,alt,label}:{src:string;alt:string;label:string}){
  const [open,setOpen]=useState(false);

  useEffect(()=>{
    if(!open)return;
    const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};
    document.addEventListener('keydown',close);
    return()=>document.removeEventListener('keydown',close);
  },[open]);

  return <>
    <button type="button" className={styles.imageTrigger} onClick={()=>setOpen(true)} aria-label={label}>
      <img src={src} alt={alt}/>
    </button>
    {open&&<div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={alt} onClick={()=>setOpen(false)}>
      <button type="button" className={styles.lightboxClose} onClick={()=>setOpen(false)} aria-label="Close image">Close</button>
      <img src={src} alt={alt} onClick={(event)=>event.stopPropagation()}/>
    </div>}
  </>;
}
