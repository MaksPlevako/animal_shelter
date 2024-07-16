import React from 'react'

import Slider from './slider'

export default function Choice() {
	return (
		<section className='my-8'>
			<div className='text-center text-4xl text-[#202053] font-semibold w-11/12'>
				Вибери собі вірного друга
			</div>
			<div className=' mx-auto text-center my-6 text-[#404040] font-medium w-11/12'>
				Не купуй – прихисти, адже справжня дружба не продається!
			</div>
			<Slider />
			<div className='text-center'>
				<button className='border-0 rounded-2xl rounded-bl-none w-10/12 bg-gradient-to-r from-blue-600 via-white to-pink-600 p-0.5 active:p-1'>
					<div className=' border-0 rounded-2xl rounded-bl-none h-full w-full bg-white text-[#EF3959] text-4xl py-3'>
						Показати більше
					</div>
				</button>
			</div>
		</section>
	)
}
