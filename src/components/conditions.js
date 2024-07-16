import React from 'react'

import animal1 from '../img/conditions_animal1.png'
import animal2 from '../img/conditions_animal2.png'
import animal3 from '../img/conditions_animal3.png'

import decor3 from '../img/decor3.png'
import decor4 from '../img/decor4.png'
import decor5 from '../img/decor5.png'

export default function Conditions() {
	return (
		<section className='my-6'>
			<div className='text-4xl text-[#202053] font-semibold text-center'>
				Наші умови
			</div>
			<div className='w-11/12 mx-auto'>
				<div className='my-6'>
					<div className='text-[#4A86FF] text-4xl font-semibold text-center'>
						Лише власник
					</div>
					<div className='text-[#404040] font-medium my-3'>
						Собаку чи кота віддаємо лише в руки майбутньому власнику
					</div>
					<div className='relative'>
						<img src={animal1} alt='animal' />
						<img src={decor3} alt='decor' className='absolute top-1 left-1' />
					</div>
				</div>
				<div className='my-6'>
					<div className='text-[#4A86FF] text-4xl font-semibold text-center'>
						Тварина для сім'ї
					</div>
					<div className='text-[#404040] font-medium my-3'>
						Творинки не для утримання на ланцюгу, охорони підприєства чи
						самовигулу
					</div>
					<div className='relative'>
						<img src={animal2} alt='animal' />
						<img src={decor4} alt='decor' className='absolute top-1 left-1' />
					</div>
				</div>
				<div className='my-6'>
					<div className='text-[#4A86FF] text-4xl font-semibold text-center'>
						Відповідальність
					</div>
					<div className='text-[#404040] font-medium my-3'>
						Не забирайте тварину з притулку, якщо не готові про неї піклуватись
					</div>
					<div className='relative'>
						<img src={animal3} alt='animal' />
						<img src={decor5} alt='decor' className='absolute top-1 -left-1' />
					</div>
				</div>
			</div>
		</section>
	)
}
