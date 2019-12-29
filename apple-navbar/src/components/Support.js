import React from 'react'
import './Support.css'

function Support() {
    return (
        <div>
            <h1>Welcome to Apple Support</h1>
            <form>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="Search Support" 
                    name="name"
                />
            </form>
        </div>
    )
}

export default Support
