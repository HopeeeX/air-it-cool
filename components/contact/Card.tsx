import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <div className="flex flex-col justify-center items-center">
				<h1 className="text-black font-extrabold text-3xl md:text-4xl mb-5">
					Why Choose Us?
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3 md:gap-5 w-full max-w-6xl">
					<div className="flex flex-col justify-center items-center bg-blue-500 backdrop-blur-md rounded-md shadow-md p-10">
						<Image
							src="/support.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold text-center">
							24/7 Emergency <br /> Services
						</h2>
					</div>

					<div className="flex flex-col justify-center items-center bg-blue-500 backdrop-blur-sm rounded-md shadow-md py-8 px-8">
						<Image
							src="/technician.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold text-center">
							Licensed & Insured <br /> Technicians
						</h2>
					</div>

					<div className="flex flex-col justify-center items-center bg-blue-500 backdrop-blur-sm rounded-md shadow-md py-8 px-8">
						<Image
							src="/response.png"
							alt="calendar"
							width={64}
							height={64}
						/>
						<h2 className="mt-4 text-[20px] text-white font-bold text-center">
							Fast Response <br /> Quality Workmanship
						</h2>
					</div>
				</div>
			</div>
    )
}

export default Card