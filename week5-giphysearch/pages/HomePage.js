export default function Home(){


const homeStyle = {listStyleType: 'disc'}
return(

<>
    <h3>Home Page</h3>
    <h2>Choose a task...</h2>
        <ul style={homeStyle}>
    <li>
        Manage your <a href="/dogs">Dogs List</a>
    </li>
    <li>
        Manage your <a href="/cats">Cats List</a>
    </li>
    <li>
        <a href="/search">Search Giphy</a>
    </li>
</ul>
<hr/>
<img srce="https://media3.gphy.com/media/alsdkfa.gif?slkdfsd" alt="Cat attacks Dog" />>
</>
);
}