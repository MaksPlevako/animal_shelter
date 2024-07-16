import React from 'react'
import Header from './components/header'
import About from './components/about'
import Choice from './components/choice'
import Conditions from './components/conditions'
import Location from './components/location'
import Contacts from './components/contacts'
import Help from './components/help'
import Footer from './components/footer'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/effect-coverflow'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/grid'

function App() {
	return (
		<div className='container mx-auto'>
			<Header />
			<About />
			<Choice />
			<Conditions />
			<Location />
			<Contacts />
			<Help />
			<Footer />
		</div>
	)
}

export default App
