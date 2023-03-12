import directus from '../../pages/api/directus';
import { notFound } from 'next/navigation';
import InteriorContent from '../../components/interiorcontent';
import CallToAction from '../../components/cta';

async function getPage(slug) {
	try {
		const page = await directus.items('pages').readOne(slug, {
			fields: [
			'*.*',
			"blocks.*",
			"blocks.item.*",
			"blocks.item.background_image.*",
		]
		});
		
		return page;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
    
	const page = await getPage(params.slug);
	return (
		<>
		<InteriorContent data={page} />
		</>
	)
}