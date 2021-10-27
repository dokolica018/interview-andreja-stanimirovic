import React from 'react'

const Header = () => {
    const style = {
        background: 'linear-gradient(to top, rgba(255, 255, 255,.7),rgba(255, 255, 255,.7)), url(https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '50vh',
        color: 'teal',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '50px'

}
return (
    <header style={style}>
        <h1>Todo App</h1>
    </header>
)
}

export default Header