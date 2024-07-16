import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	about: false,
}

export const setAbout = createSlice({
	name: 'about',
	initialState,
	reducers: {
		changeAbout: state => {
			state.about = !state.about
		},
	},
})

export const { changeAbout } = setAbout.actions

export default setAbout.reducer
