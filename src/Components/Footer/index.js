import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebook,
	faInstagramSquare,
	faTwitter,
	faGithub,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const brands = [faFacebook, faInstagramSquare, faTwitter, faGithub, faYoutube];

const element = <FontAwesomeIcon icon={faAngleDown} />;

export default function Footer({ ...otherProps }) {
	return (
		<footer className="bg-white rounded mx-8 pb-5">
			<div
				className="bg-regal-black rounded-lg text-xs
				 text-gray-200
            px-4 grid grid-cols-4 grid-rows-3 sm:grid-rows-2 w-full max-w-7xl mx-auto py-10"
			>
				<ul className="col-start-1 leading-loose">
					<li className="text-sm font-medium pb-1">SUPPORT</li>
					<li>
						<a href="/#">Pricing</a>
					</li>
					<li>
						<a href="/#">Contact</a>
					</li>
					<li>
						<a href="/#">Documentation</a>
					</li>
					<li>
						<a href="/#">Guides</a>
					</li>
				</ul>
				<ul className="col-start-2 leading-loose">
					<li className="text-sm  font-medium pb-1">COMPANY</li>
					<li>
						<a href="/#">Tours</a>
					</li>
					<li>
						<a href="/#">Careers</a>
					</li>
					<li>
						<a href="/#">Press</a>
					</li>
				</ul>
				<ul className="col-start-3 leading-loose">
					<li className="pb-1 text-sm font-semibold">LEGAL</li>
					<li>
						<a href="/#">Claim</a>
					</li>
					<li>
						<a href="/#">Privacy</a>
					</li>
					<li>
						<a href="/#">Terms</a>
					</li>
				</ul>
				<ul className="col-start-4 leading-loose">
					<li className="text-sm font-medium pb-1">LANGUAGE</li>
					<button
						className=" w-full h-1/4 bg-button2 flex items-center justify-between text-gray-800 px-2 rounded-md"
						type="submit"
					>
						English
						{element}
					</button>
				</ul>
				<div
					className="sm:border-t sm:border-b flex items-center  border-gray-400 border-opacity-30 
				pl-2 row-start-2 col-start-1 col-span-4 sm:col-span-2 text-sm"
				>
					<ul>
						<li className="my-1 font-medium">SUBSCRIBE TO OUR NEWSLETTER</li>
						<li>
							The latest news, articles and resources sent to your inbox weekly.
						</li>
					</ul>
				</div>

				<div
					className="min-w-full col-start-3 col-span-2 row-start-3 sm:row-start-2 flex items-center justify-end 
				sm:border-t sm:border-b border-gray-400 border-opacity-30 "
				>
					<input
						className="h-1/5 rounded my-2 px-2 py-4 text-gray-700"
						type="text"
						value="Enter your email"
					/>
					<button className="bg-button2 h-1/4 rounded text-center ml-2 my-2 px-4 text-gray-800">
						Subscribe
					</button>
				</div>
				<div className="flex justify-center items-center  row-start-4 sm:row-start-3 col-start 1 col-span-5">
					{brands.map((item) => (
						<FontAwesomeIcon className="text-lg mx-2 mt-6" icon={item} />
					))}
				</div>
			</div>
		</footer>
	);
}
