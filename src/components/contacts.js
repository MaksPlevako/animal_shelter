import React from 'react'

import contacts from '../img/contact_mobeli.png'
import decor from '../img/decor6.png'

export default function Contacts() {
	return (
		<section className='my-8'>
			<div className='text-4xl font-semibold text-[#202053] text-center'>
				Наші контакти
			</div>
			<div className='text-[#202053] my-6'>
				<div className='text-center text-xl mb-5'>
					У вас є питання?
					<br /> Зв'яжіться з нами:
				</div>
				<div className='grid grid-cols-4 gap-4 w-11/12 mx-auto'>
					<div className='text-[#4A86FF] text-xl'>Адреса</div>
					<div className='col-span-3'>
						cмт. Жук
						<br /> м. Івано-Франківська область
					</div>
					<div className='text-[#4A86FF] text-xl'>Телефон</div>
					<div className='col-span-3 font-medium'>
						+38 (099) 123 45 67
						<br />
						+38 (088) 123 45 67
					</div>
					<div className='col-span-2 text-[#4A86FF] text-lg'>
						Електронна адреса
					</div>
					<div className='col-span-2'>hatyna@gmail.com</div>
				</div>
			</div>
			<div className='relative'>
				<img src={contacts} alt='contacts' className='mx-auto' />
				<img
					src={decor}
					alt='decor'
					className='absolute -top-1 left-1/2 -translate-x-1/2'
				/>
			</div>
		</section>
	)
}
