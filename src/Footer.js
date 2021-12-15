import React from 'react'

export default function Footer() {
    const myStyle={
        position:'absolute',
        top:' 100vh',
        width:"100%"
    }
    return (
        <div className='bg-dark text-center text-light py-3' style={myStyle}>
            <footer>Copyright &copy; 2021</footer>
            
        </div>
    )
}
