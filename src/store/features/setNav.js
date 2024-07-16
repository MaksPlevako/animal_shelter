import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	nav: false,
}

export const setNav = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		changeNav: state => {
			state.nav = !state.nav
		},
	},
})

export const { changeNav } = setNav.actions

export default setNav.reducer
