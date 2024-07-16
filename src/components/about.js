import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import dog2 from '../img/dog2_mobile.png'
import decor2 from '../img/decor2.png'
import { changeAbout } from '../store/features/setAbout'

export default function About() {
	const about = useSelector(state => state.about.about)
	const dispatch = useDispatch()
	return (
		<section className='my-6'>
			<div className='text-4xl text-[#202053] font-semibold text-center'>
				Про нас
			</div>
			<div className='w-full my-6 relative'>
				<img src={dog2} alt='dog2' className='relative mx-auto' />
				<img
					src={decor2}
					alt='decor2'
					className='absolute -top-1 left-1/2 -translate-x-1/2'
				/>
			</div>
			<div className='w-11/12 mx-auto text-[#404242] mb-6'>
				<p>
					В притулку весь час знаходиться 350 дорослих та 20 цуценят. В
					залежності від швидкості прилаштувань цифри змінюються. Все почалося
					зі співчуття до масово викинутих тварин у місті, доля яких всім була
					байдужою. Власними зусиллями та особистими коштами волонтерів та
					небайдужих людей ми розпочали прил{!about && <span>...</span>}
				</p>
				<p className={about ? 'block' : 'hidden'}>
					аштування та стерилізацію тварин для зменшення кількості безхатьків.
					За роки нашої праці в рік стерилізується понад 400 тварин, а дім
					знаходять близько 240 безхатьків, деяких вдається прилаштувати навіть
					за кордон. Ми постійно покращуємо умови для проживання собак,
					проводимо ремонтні роботи вольєрів, облагороджуємо територію притулку.
					Проводимо масову вакцинацію собак, щоб уникнути спалаху захворювань.
					Наша робота вимагає дуже багато зусиль, як фізичних, так і фінансових.
					Допомога від міста полягає тільки у стерилізації та кастрації тварин,
					а всі інші витрати, включно із зарплатою, оплатою комунальних послуг,
					ремонтними роботами та лікуванням хворих тварин - це все на руках
					волонтерів та благодійних коштах. Ми щиро сподіваємося, що наша праця
					не марна і нас підтримають люди по всьому світу!
				</p>
			</div>
			<div className='text-center'>
				<button
					className='border-0 rounded-2xl rounded-bl-none w-10/12 bg-gradient-to-r from-blue-600 via-white to-pink-600 p-0.5 active:p-1'
					onClick={() => dispatch(changeAbout())}
				>
					<div className=' border-0 rounded-2xl rounded-bl-none h-full w-full bg-white text-[#EF3959] text-4xl py-3'>
						Детальніше
					</div>
				</button>
			</div>
		</section>
	)
}
