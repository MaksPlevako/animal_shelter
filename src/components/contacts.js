import React from 'react'

import contacts from '../img/contact_mobeli.png'
import decor from '../img/decor6.png'

export default function Contacts() {
	return (
		<section className='my-8 xl:my-16'>
			<div className='text-4xl font-semibold text-[#202053] text-center lg:text-6xl'>
				Наші контакти
			</div>
			<div className='lg:flex lg:flex-row lg:justify-around my-6 lg:mt-16 lg:w-11/12 lg:mx-auto'>
				<div className='text-[#202053] lg:w-1/2 text-2xl'>
					<div className='text-center text-xl mb-5 lg:text-left lg:text-2xl'>
						У вас є питання?
						<br /> Зв'яжіться з нами
						<span className='hidden lg:inline'> безпосередньо</span>:
					</div>
					<div className='grid grid-cols-4 gap-4 w-11/12 mx-auto xl:mx-0'>
						<div className='text-[#4A86FF] text-xl lg:text-2xl'>Адреса</div>
						<div className='col-span-3 lg:text-[20px] text-base lg:text-2xl'>
							cмт. Жук
							<br /> м. Івано-Франківська область
						</div>
						<div className='text-[#4A86FF] text-xl lg:text-2xl'>Телефон</div>
						<div className='col-span-3 font-medium text-base lg:text-2xl'>
							<b>
								+38 (099) 123 45 67
								<br />
								+38 (088) 123 45 67
							</b>
						</div>
						<div className='col-span-2 text-[#4A86FF] text-lg lg:text-2xl'>
							Електронна адреса
						</div>
						<div className='col-span-2 font-bold text-base lg:text-2xl'>
							hatyna@gmail.com
						</div>
					</div>
				</div>
				<div className='relative lg:w-1/2 my-6 lg:my-0'>
					<img src={contacts} alt='contacts' className='mx-auto w-10/12' />
					<img
						src={decor}
						alt='decor'
						className='absolute -top-1 left-1/2 -translate-x-1/2 w-10/12'
					/>
				</div>
			</div>
		</section>
	)
}
