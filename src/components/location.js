import React from 'react'

import map from '../img/map_mobile.png'
import map_tablet from '../img/map_tablet.png'
import point from '../img/point.png'

export default function Location() {
	return (
		<section className='my-8'>
			<div className='text-4xl font-semibold text-[#202053] my-6 text-center'>
				Локація
			</div>
			<div className='w-full lg:hidden relative'>
				<img src={map} alt='map' />
				<img
					src={point}
					alt='point'
					className='absolute left-[239px] top-[50px] w-4'
				/>
			</div>
			<div className='w-full relative hidden lg:block'>
				<img src={map_tablet} alt='map' />
				<img
					src={point}
					alt='point'
					className='absolute left-[652px] top-[187px]'
				/>
			</div>
		</section>
	)
}
