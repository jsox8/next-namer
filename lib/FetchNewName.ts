import Names from '@/data/names.json';

export default function FetchNewName() {
	const f_name: string = Names[Math.floor(Math.random() * Names.length)];
	const l_name: string = Names[Math.floor(Math.random() * Names.length)];

	return { first_name: f_name, last_name: l_name };
}
