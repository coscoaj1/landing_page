import React from 'react';
import Photo from './../../assets/mountains-5051149_1920.jpg';
import Photo2 from './../../assets/italy-4090933_1920.jpg';
import Photo3 from './../../assets/man-5983064_1920.jpg';
export default function Cards({ ...otherProps }) {
	return (
		<div className="flex flex-row flex-wrap bg-gray-200 py-14 justify-center mx-8 font-bold">
			<div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo} alt="mountains" />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span>Alaska</span>
							</li>
							<li className="list-none">
								<span className="">Description</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo2} alt="Italy coast" />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span>Italy</span>
							</li>
							<li className="list-none">
								<span className="">$1600</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo3} alt="man hiking" />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span>South America</span>
							</li>
							<li className="list-none">
								<span className="text-gray-500 font-normal">Price varies</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
