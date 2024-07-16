import React from 'react'

import map from '../img/map_mobile.png'

export default function Location() {
	return (
		<section className='my-8'>
			<div className='text-4xl font-semibold text-[#202053] my-6 text-center'>
				Локація
			</div>
			<img src={map} alt='map' />
		</section>
	)
}
