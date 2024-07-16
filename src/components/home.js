import React from 'react'
import dog1 from '../img/dog_mobile.png'
import decor from '../img/decor.png'

export default function Home() {
	return (
		<div className='py-2 home'>
			<div className='mb-6 text-4xl text-[#202053] font-semibold w-11/12 mx-auto'>
				Цим оченятам дуже потрібні любов і турбота
			</div>
			<div className='text-xl text-[#404040] w-11/12 mx-auto'>
				Вірний друг радітиме тобі завжди. Йому потрібно дуже мало - теплий дім
				та дбайливий господар
			</div>
			<div className='w-full my-6 relative'>
				<img src={decor} alt='decor' className='relative mx-auto' />
				<img
					src={dog1}
					alt='dog1'
					className='absolute mx-auto top-0 left-1/2 -translate-x-1/2'
				/>
			</div>
			<div className='w-full text-center mt-6'>
				<button className='text-4xl border-2 rounded-2xl w-11/12 py-3 border-[#EF3959] bg-[#EF3959] text-white rounded-bl-none  active:bg-white active:text-[#EF3959]'>
					Обрати
				</button>
			</div>
		</div>
	)
}
