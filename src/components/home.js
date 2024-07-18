import React from 'react'
import dog1 from '../img/dog_mobile.png'
import decor from '../img/decor.png'
import dogTablet from '../img/dog_tablet.png'
import decorTablet from '../img/decor_tablet.png'

export default function Home() {
	return (
		<div className='py-10 home lg:flex lg:flex-row lg:mx-auto lg:w-full'>
			<div className='ml-6'>
				<div className='mb-6 text-4xl text-[#202053] font-semibold w-11/12 sm:max:lg:mx-auto lg:text-6xl lg:ml-8'>
					Цим оченятам дуже потрібні любов і турбота
				</div>
				<div className='text-xl text-[#404040] w-11/12 sm:max-lg:mx-auto lg:text-2xl lg:mb-20 lg:w-8/12 lg:text-left lg:ml-8'>
					Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий дім
					та дбайливий господар
				</div>
				<div className='w-full my-6 relative lg:hidden'>
					<img src={decor} alt='decor' className='relative mx-auto' />
					<img
						src={dog1}
						alt='dog1'
						className='absolute mx-auto top-0 left-1/2 -translate-x-1/2'
					/>
				</div>
				<div className='w-full text-center mt-6 lg:w-auto lg:text-left lg:ml-8'>
					<button className='text-4xl border-2 rounded-2xl w-11/12 py-3 border-[#EF3959] bg-[#EF3959] text-white rounded-bl-none  active:bg-white active:text-[#EF3959] lg:w-3/5 lg:py-8 lg:font-semibold'>
						Обрати
					</button>
				</div>
			</div>
			<div className='w-full relative hidden lg:block'>
				<img src={decorTablet} alt='decor' className='relative' />
				<img src={dogTablet} alt='dog1' className='absolute top-0' />
			</div>
		</div>
	)
}
