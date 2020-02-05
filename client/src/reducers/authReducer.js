const reducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP':
			
			localStorage.setItem('user', JSON.stringify(action.payload.data.user));
			localStorage.setItem('token', JSON.stringify(action.payload.data.token));
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.data.user,
				token: action.payload.data.token,
			};
		case 'LOGIN':
			localStorage.setItem('user', JSON.stringify(action.payload.data.user));
			localStorage.setItem('token', JSON.stringify(action.payload.data.token));
			return {
				...state,
				isAuthenticated: true,
				user: action.payload.data.user,
				token: action.payload.data.token,
			};
		case 'LOGOUT':
			localStorage.clear();
			return {
				...state,
				isAuthenticated: false,
				user: null,
			};
		default:
			return state;
	}
};

export default reducer;