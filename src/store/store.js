import { configureStore } from '@reduxjs/toolkit'
import setNav from './features/setNav'
import setAbout from './features/setAbout'

export const store = configureStore({
	reducer: {
		nav: setNav,
		about: setAbout,
	},
})
