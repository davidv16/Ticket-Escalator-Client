import React, {useEffect} from 'react';
// Import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
// Import IUser from '../../models/IUser';
// import { getUserInfoDispatch, logoutUserDispatch } from '../../store/actions/UserActions';

function NavBar() {
	// Const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		// Dispatch(getUserInfoDispatch());
	}, []);

	const logout = () => {
		// Dispatch(logoutUserDispatch());
		localStorage.clear();
		navigate('/');
	};

	//  Const user: IUser = useSelector((state: RootStateOrAny) => state.user.user);
	return (
		<div className='navbar'>
			<nav>
				<div className='thumbnail' style={{backgroundImage: 'url(https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/83.png)'}} />
				<h3>notandi</h3>
				<div className="links">
					<h4>Dashboard</h4>
					<h4 onClick={() => navigate(`/`)}>Tickets</h4>
					<h4 onClick={() => navigate(`/customers`)}>Customers</h4>
					<h4 onClick={() => navigate(`/products`)}>Products</h4>
				</div>
        
				<button type='button' name='logout' onClick={() => {
					logout();
				}}>logout</button>
			</nav>
		</div>
	);
}

export default NavBar;
