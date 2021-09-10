import React from 'react';

export default function Footer({ ...otherProps }) {
	return (
		<footer className="bg-white rounded mx-8 pb-5">
			<div
				className="bg-regal-blue rounded-lg text-sm text-gray-400 
            px-4 grid grid-cols-5 w-full max-w-7xl mx-auto py-14"
			>
				<ul className="col-start-1 leading-loose">
					<li className="py-1">
						<strong>SOLUTIONS</strong>
					</li>
					<li>Marketing</li>
					<li>Analytics</li>
					<li>Commerce</li>
					<li>Insights</li>
				</ul>
				<ul className="col-start-2 leading-loose">
					<li className="py-1">
						<strong>SUPPORT</strong>
					</li>
					<li>Pricing</li>
					<li>Contact</li>
					<li>Documentation</li>
					<li>Guides</li>
				</ul>
				<ul className="col-start-3 leading-loose">
					<li className="py-1">
						<strong>COMPANY</strong>
					</li>
					<li>About</li>
					<li>Blog</li>
					<li>Careers</li>
					<li>Press</li>
				</ul>
				<ul className="col-start-4 leading-loose">
					<li className="py-1">
						<strong>LEGAL</strong>
					</li>
					<li>Claim</li>
					<li>Privacy</li>
					<li>Terms</li>
				</ul>
				<ul className="col-start-5 leading-loose">
					<li className="py-1">
						<strong>LANGUAGE</strong>
					</li>
					<button
						className=" w-3/4 flex items-center justify-center rounded-md bg-purple-600 text-white"
						type="submit"
					>
						English
					</button>
				</ul>
			</div>
		</footer>
	);
}
