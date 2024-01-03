import Logo from './images/Logo.jpg';

function Nav() {
return(
    <nav>
        <img src={Logo}/>
        <ul>
        <li><a hrc="#">Home</a></li>
        <li><a hrc="#">About</a></li>
        <li><a hrc="#">Menu</a></li>
        <li><a hrc="#">Reservation</a></li>
        <li><a hrc="#">Order Online</a></li>
        <li><a hrc="#">Login</a></li>
    </ul>
    </nav>
);
}
export default Nav;