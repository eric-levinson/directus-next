import * as React from 'react';


export default function Landing(params) {
    const global = params.data;
	return (
		<div className='container mx-auto'>
			<h1 className='text-3xl font-bold underline mb-6 mt-6'>{global.title}</h1>
			<p>{global.description}</p>
		</div>
	);
}