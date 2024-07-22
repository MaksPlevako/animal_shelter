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
			<div className='text-4xl text-[#202053] font-semibold text-center lg:text-6xl lg:mb-8'>
				Наші умови
			</div>
			<div className='w-11/12 mx-auto lg:flex lg:flex-row lg:justify-around lg:w-full'>
				<div className='my-6 lg:w-[300px] xl:w-[425px]'>
					<div className='text-[#4A86FF] font-semibold text-center text-[32px] lg:text-left xl:font-bold xl:text-[40px]'>
						Лише власник
					</div>
					<div className='text-[#404040] font-medium my-3 lg:text-xl xl:text-2xl'>
						Собаку чи кота віддаємо лише в руки майбутньому власнику
					</div>
					<div className='relative'>
						<img src={animal1} alt='animal' />
						<img src={decor3} alt='decor' className='absolute top-1 left-1' />
					</div>
				</div>
				<div className='my-6 lg:w-[300px] xl:w-[425px]'>
					<div className='relative hidden lg:block mb-2'>
						<img src={animal2} alt='animal' className='mx-auto' />
						<img
							src={decor4}
							alt='decor'
							className='absolute top-1 left-1/2 -translate-x-1/2'
						/>
					</div>
					<div className='text-[#4A86FF]  font-semibold text-center text-[32px] lg:text-left xl:font-bold xl:text-[40px]'>
						Тварина для сім'ї
					</div>
					<div className='text-[#404040] font-medium my-3 lg:text-xl xl:text-2xl'>
						Творинки не для утримання на ланцюгу, охорони підприєства чи
						самовигулу
					</div>
					<div className='relative lg:hidden'>
						<img src={animal2} alt='animal' />
						<img src={decor4} alt='decor' className='absolute top-1 left-1' />
					</div>
				</div>
				<div className='my-6 lg:w-[300px] xl:w-[425px]'>
					<div className='text-[#4A86FF] font-semibold text-center text-[32px] lg:text-left xl:font-bold xl:text-[40px]'>
						Відповідальність
					</div>
					<div className='text-[#404040] font-medium my-3 lg:text-xl xl:text-2xl'>
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
