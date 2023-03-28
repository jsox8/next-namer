export default function FetchSavedNames() {
	if (typeof window !== 'undefined') {
		const names = JSON.parse(localStorage.getItem('names') || '[]');

		if (names) return names;
	}
}
