import React from 'react'

export default function Help() {
	return (
		<section className='my-10'>
			<div className='text-4xl text-[#202053] font-semibold text-center mb-6'>
				Як допомогти
			</div>
			<div className='w-11/12 mx-auto border rounded-[50px] bg-gradient-to-r from-blue-700 via-white to-pink-600 p-1'>
				<div className='bg-white border rounded-[50px] py-11'>
					<div className='text-3xl text-[#202053] font-medium text-center'>
						Бажаєте допомогти притулку?
					</div>
					<div className='text-[#404040] font-medium text-center my-6 w-10/12 mx-auto'>
						Перейдіть за посиланням
						<br /> та заповніть форму
						<br /> Ми з вами обов’язково звяжемось
					</div>
					<div className='w-full text-center'>
						<button className='text-4xl border-2 rounded-2xl w-11/12 py-3 border-[#EF3959] bg-[#EF3959] text-white rounded-bl-none  active:bg-white active:text-[#EF3959]'>
							Зв'яжіться з нами
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
