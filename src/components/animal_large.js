import React from 'react'

import animal1 from '../img/animal1.png'
import animal2 from '../img/animal2.png'
import animal3 from '../img/animal3.png'
import animal4 from '../img/animal4.png'
import animal5 from '../img/animal5.png'
import animal6 from '../img/animal6.png'
import arrowPhone from '../img/arrow-phone.png'

export default function AnimalLarge() {
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
	]
	return (
		<div className='grid grid-cols-3 gap-[125px] w-full'>
			{animal.map((p, index) => {
				return (
					<div>
						<img src={p.img} alt={index} className='mb-6 w-full' />
						<div className='flex flex-row items-center justify-between'>
							<div>
								<div className='text-[#202053] text-5xl font-bold '>
									{p.name}
								</div>
								<div className='text-[#404040] font-medium my-3 text-2xl'>
									{p.age}
								</div>
							</div>
							<button className='w-1/4'>
								<img src={arrowPhone} alt='arrow' className='w-full' />
							</button>
						</div>
					</div>
				)
			})}
		</div>
	)
}
