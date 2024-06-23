import './Header.css'
import logo from '../assets/think.png'

export default function Header() {
    return (
        <header>
            <img src={logo} alt="Thinking Emoji" />
            <h1 id='header-title'>TO-DO-List</h1>
        </header>
    )
}