import React from 'react'

import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import animal1 from '../img/animal1.png'
import animal2 from '../img/animal2.png'
import animal3 from '../img/animal3.png'
import animal4 from '../img/animal4.png'
import animal5 from '../img/animal5.png'
import animal6 from '../img/animal6.png'
import animal7 from '../img/animal7.png'
import animal8 from '../img/animal8.png'
import arrowPhone from '../img/arrow-phone.png'

export default function Slider() {
	const animal = [
		{
			img: animal1,
			name: 'Дружок',
			age: 'Вік 1 рік 3 місяці',
		},
		{
			img: animal2,
			name: 'Бім',
			age: 'Вік 8 місяців',
		},
		{
			img: animal3,
			name: 'Сільвер',
			age: 'Вік 1 рік 9 місяців',
		},
		{
			img: animal4,
			name: 'Білка',
			age: 'Вік 2 рокиі',
		},
		{
			img: animal5,
			name: 'Лаккі',
			age: 'Вік 2 роки 1 місяць',
		},
		{
			img: animal6,
			name: 'Джек',
			age: 'Вік 2 роки 1 місяць',
		},
		{
			img: animal7,
			name: 'Буся',
			age: 'Вік 2 роки 1 місяць',
		},
		{
			img: animal8,
			name: 'Журик',
			age: 'Вік 1 рік',
		},
	]
	return (
		<div>
			<Swiper
				modules={[EffectCoverflow]}
				spaceBetween={20}
				slidesPerView={1.4}
				coverflowEffect={{
					rotate: 0,
					slideShadows: false,
				}}
				className='coverflow'
			>
				{animal.map((p, index) => {
					return (
						<SwiperSlide key={index} className=''>
							<div className='w-[223px]'>
								<img src={p.img} alt={index} className='mb-6' />
								<div className='flex flex-row items-center justify-between'>
									<div>
										<div className='text-[#202053] text-4xl '>{p.name}</div>
										<div className='text-[#404040] font-medium my-3'>
											{p.age}
										</div>
									</div>
									<button>
										<img src={arrowPhone} alt='arrow' />
									</button>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
