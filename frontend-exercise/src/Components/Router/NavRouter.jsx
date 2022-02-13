import { Link } from 'react-router-dom'


export const NavRouter = () => {
    return (
        <div>
       <li class="btn btn-dark m-3">
      <Link exact to="/">Tasks</Link>
      </li>
  
       <li class="btn btn-dark">
      <Link to="/Folders">Folders</Link>
    </li>
   
  </div>
    )
}