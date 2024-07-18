import React from 'react'
import logo_mobile from '../img/Logo_Mobile.png'
import logo_tablet from '../img/logo.png'
import '../style/app.css'
import Home from './home'
import { useSelector, useDispatch } from 'react-redux'
import { changeNav } from '../store/features/setNav'

export default function Header() {
	const nav = useSelector(state => state.nav.nav)
	const dispatch = useDispatch()

	return (
		<div className='header mb-6'>
			<header>
				<div className='flex flex-grid justify-around items-center py-2 '>
					<div className='lg:basis-1/2 pl-9'>
						<img src={logo_mobile} alt='logo mobile' className='lg:hidden' />
						<img
							src={logo_tablet}
							alt='logo tablet'
							className='hidden lg:block'
						/>
					</div>
					<div className='hidden lg:block'>UA</div>
					<button className='border-2 rounded-xl border-[#EF3959] bg-[#EF3959] px-[25px] py-[15px] text-white text-xl active:bg-white active:text-[#EF3959]'>
						Допомогти
					</button>
					<div onClick={() => dispatch(changeNav())}>
						{!nav && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='red'
								className='size-12'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						)}
						{nav && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='red'
								className='size-12'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18 18 6M6 6l12 12'
								/>
							</svg>
						)}
					</div>
				</div>
				{nav && (
					<div className='xl:hidden w-full h-screen'>
						<div className='border border-black w-11/12 mx-auto' />
						<div className='text-center text-[#202053] font-medium lg:text-xl'>
							<ul>
								<li className='my-6'>
									<button className='border border-white py-2 px-3'>
										Про нас
									</button>
								</li>
								<li className='my-6 border border-white'>
									<button className='border border-white py-2 px-3'>
										Вірні друзі
									</button>
								</li>
								<li className='my-6 border border-white'>
									<button className='border border-white py-2 px-3'>
										Наші умови
									</button>
								</li>
								<li className='my-6 border border-white'>
									<button className='border border-white py-2 px-3'>
										Локація
									</button>
								</li>
								<li className='my-6 border border-white'>
									<button className='border border-white py-2 px-3'>
										Контакти
									</button>
								</li>
							</ul>
							<button>UA</button>
						</div>
					</div>
				)}
			</header>
			<Home />
		</div>
	)
}
