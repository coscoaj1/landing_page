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
				className="bg-regal-blue rounded-lg text-xs
				 text-gray-400
            px-4 grid grid-cols-5 grid-rows-2 w-full max-w-7xl mx-auto py-10"
			>
				<ul className="col-start-1 leading-loose pl-2">
					<li className="text-sm font-medium pb-1">SOLUTIONS</li>
					<li>
						<a href="/#">Marketing</a>
					</li>
					<li>
						<a href="/#">Analytics</a>
					</li>
					<li>
						<a href="/#">Commerce</a>
					</li>
					<li className="pb-4">
						<a href="/#">Insights</a>
					</li>
				</ul>
				<ul className="col-start-2 leading-loose">
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
				<ul className="col-start-3 leading-loose">
					<li className="text-sm  font-medium pb-1">COMPANY</li>
					<li>
						<a href="/#">About</a>
					</li>
					<li>
						<a href="/#">Blog</a>
					</li>
					<li>
						<a href="/#">Careers</a>
					</li>
					<li>
						<a href="/#">Press</a>
					</li>
				</ul>
				<ul className="col-start-4 leading-loose">
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
				<ul className="col-start-5 leading-loose">
					<li className="text-sm font-medium pb-1">LANGUAGE</li>
					<button
						className=" w-full h-1/4 flex items-center justify-between px-2 rounded-md bg-button-blue"
						type="submit"
					>
						English
						{element}
					</button>
				</ul>
				<div
					className="min-w-full border-t border-b flex items-center  border-gray-400 border-opacity-30 
				pl-2 row-start-2 col-start-1 col-span-5 text-sm"
				>
					<div className=" mr-96">
						<ul>
							<li className="my-1 font-medium">SUBSCRIBE TO OUR NEWSLETTER</li>
							<li>
								The latest news, articles and resources sent to your inbox
								weekly.
							</li>
						</ul>
					</div>
					<input
						className="h-1/5 rounded my-2 px-2 py-4"
						type="text"
						value="Enter your email"
					/>
					<button className="bg-indigo-500 h-1/4 rounded text-center ml-2 my-2 px-4 text-white">
						Subscribe
					</button>
				</div>
				<div className="flex justify-center items-center  row-start-3 col-start 1 col-span-5">
					{brands.map((item) => (
						<FontAwesomeIcon className="text-lg mx-2 mt-6" icon={item} />
					))}
				</div>
			</div>
		</footer>
	);
}
