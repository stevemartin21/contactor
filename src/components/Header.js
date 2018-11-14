import React from 'react';
import { Link} from 'react-router-dom';

export default function Header(props) {
  return (
   
      <nav className='navbar navbar-expand-sm navbar-dark stylish-color-dark pb-3 pt-3 mb-5'> 
       <div className='container'>
        <Link to='/' className='navbar-brand text-white'><i className='fa fa-dashboard mr-3'></i>{props.branding}</Link>
            <div>
            <ul className='navbar-nav mr-auto'>

                <li className='nav-item'>
                    <Link to='/' className='nav-link'><i className='fa fa-home mr-3'></i> Home</Link>
                </li>

                 <li className='nav-item'>
                    <Link to='/contact/add' className='nav-link'><i className='fa fa-user mr-3'></i>Add Contact</Link>
                </li>

                 <li className='nav-item'>
                    <Link to='/about' className='nav-link'><i className='fa fa-question mr-3'></i>About</Link>
                </li>
            </ul>
            </div>
        </div>
      
      </nav>  
  )
}
