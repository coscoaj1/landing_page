import React from 'react';
import Photo from './../../assets/field-6574455_1280.jpg';

export default function Cards({ ...otherProps }) {
	return (
		<div className="flex flex-row flex-wrap py-14 justify-center">
			<div className=" w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo} />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span className="font-bold text-base">Title</span>
							</li>
							<li className="list-none">
								<span className="font-bold text-base">Description</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo} />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span className="font-bold text-base">Title</span>
							</li>
							<li className="list-none">
								<span className="font-bold text-base">Description</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">
				<div className="bg-white shadow-sm">
					<div>
						<img className="w-full" src={Photo} />
					</div>
					<div className="p-2.5">
						<ul>
							<li className="list-none">
								<span className="font-bold text-base">Title</span>
							</li>
							<li className="list-none">
								<span className="font-bold text-base">Description</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
