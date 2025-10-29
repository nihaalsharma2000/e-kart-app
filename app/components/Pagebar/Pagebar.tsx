import { Breadcrumbs } from '@mui/material'
import React from 'react'
import './Pagebar.css'
type PageProp = {
  pagename: string;
};
function Pagebar({pagename}:PageProp) {
  return (
    
    <div className='pagebar-wrapper'>
        <div className='container pagebar'>
            <h1 className='page-heading'>{pagename}</h1>
        <div>
            <Breadcrumbs/>
        </div>
        </div>
        
    </div>
  )
}

export default Pagebar