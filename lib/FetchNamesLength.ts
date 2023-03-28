import Names from '@/data/names.json';

function numberWithCommas(x: number) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function FetchNamesLength() {
	return { length: numberWithCommas(Names.length) };
}
