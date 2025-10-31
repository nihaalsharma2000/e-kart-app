"use client"
import React from 'react'
import './Topbar.css'
import { FacebookOutlined, Instagram, LinkedIn, Pinterest, RssFeed, X } from '@mui/icons-material';
const Topbar = () => {
    return (

        <div className='topbar-wrapper'>
            <div className='container topbar'>
                <div className='topbar-left'>
                    <a href="#"><X /></a>
                    <a href="#"><FacebookOutlined /></a>
                    <a href="#"><Pinterest /></a>
                    <a href="#"><Instagram /></a>
                    <a href="#"><LinkedIn /></a>
                    <a href="#"><RssFeed /></a>
                </div>
                <div className='topbar-right'>
                    <p>Free delivery over $100 on all products</p>
                </div>
            </div>
        </div>
    )
}

export default Topbar