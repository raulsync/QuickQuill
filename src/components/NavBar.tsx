import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="flex flex-row justify-between mt-8">
      <NavLink
        to={'/'}
        className={'text-blue-500 font-semibold'}
      >
        Home
      </NavLink>
      <NavLink
        to={'/quill'}
        className={'text-blue-500 font-semibold'}
      >
        All Quill
      </NavLink>
    </div>
  );
}

export default NavBar;
