import React from 'react'

import logo from '../img/logo.png'
import facebook from '../img/Facebook.png'
import instagram from '../img/Instagram.png'
import telegram from '../img/Telegram.png'

export default function Footer() {
	return (
		<footer className='my-6'>
			<div className='grid grid-cols-2 gap-4 lg:gap-[140px] w-full p-4 text-[#202053] font-medium lg:grid-cols-3 xl:grid-cols-5 xl:justify-around xl:gap-12'>
				<div className='my-10 mx-auto marker:w-3/5 sm:max-lg:col-span-2 lg:m-0'>
					<img src={logo} alt='logo' className='sm:max-lg:mx-auto mb-9' />
					<div className='hidden xl:block'>
						<div className='my-4 text-[#202053] text-xl lg:text-md lg:my-0 lg:mb-8 xl:text-xl'>
							Приєднутесь до нас в соціальних мережах
						</div>
						<div className='flex flex-row justify-between sm:max-lg:col-span-2'>
							<img src={facebook} alt='facebook' />
							<img src={instagram} alt='instagram' />
							<img src={telegram} alt='telegram' />
						</div>
					</div>
				</div>
				<div className='xl:hidden'>
					<div className='my-4 text-[#202053] text-xl lg:text-md lg:my-0 lg:mb-8'>
						Приєднутесь до нас в соціальних мережах
					</div>
					<div className='flex flex-row justify-between sm:max-lg:col-span-2'>
						<img src={facebook} alt='facebook' />
						<img src={instagram} alt='instagram' />
						<img src={telegram} alt='telegram' />
					</div>
				</div>
				<div>
					<ul>
						<li className='mb-2'>
							<button>Вірні друзі</button>
						</li>
						<li className='mb-2'>
							<button>Обрати друга</button>
						</li>
						<li className='mb-2'>
							<button>Щасливчики</button>
						</li>
						<li>
							<button>Стати волонтером</button>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='mb-2'>
							<button>Про нас</button>
						</li>
						<li className='mb-2'>
							<button>Наші умови</button>
						</li>
						<li className='mb-2'>
							<button>Наша команда</button>
						</li>
						<li>
							<button>Історія створення</button>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='mb-2'>
							<button>Локаця</button>
						</li>
						<li className='mb-2'>
							<button>Контакти</button>
						</li>
						<li>
							<button>Інформація</button>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='mb-2'>Допомогти матеріально:</li>
						<li className='mb-2'>ГО “ХАТИНА”</li>
						<li className='mb-2'>
							ЄДРПОУ: <b>123456789</b>
						</li>
						<li className='mb-2'>Карта Приватбанку</li>
						<li className='mb-2'>
							<b>4141 2929 4646 1111</b>
						</li>
						<li>Прокопів Петро Павлович</li>
					</ul>
				</div>
			</div>
			<div className='text-center text-[#404040] mt-11'>
				Всі права захищено <b>reserved@hatyna.ua</b>
			</div>
		</footer>
	)
}
