

import Quill from 'quill';

import "quill/dist/quill.snow.css"; 
import { useRef } from 'react';

const Editor = () => {
    const containerRef = useRef();
    
  return (
    <div className="flex flex-col">
      <div className="flex flex-col border border-slate-300 rounded-md overflow-hidden focus-within:border-slate-400 focus-within:shadow-sm transition bg-white">
        <div ref={containerRef}/>
      </div>
    </div>
  )
}

export default Editor
