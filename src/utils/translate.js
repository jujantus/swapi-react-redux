export function translate(word) {
	const translator = {
		unknown: 'Desconocido',
		'n/a': 'n/a',
		blue: 'Azul',
		yellow: 'Amarillo',
		red: 'Rojo',
		brown: 'Marrón',
		'blue-gray': 'Azul-gris',
		black: 'Negro',
		hazel: 'Castaño',
		orange: 'Naranja',
		pink: 'Rosa',
		'red, blue': 'Rojo, azul',
		gold: 'Dorado',
		'green, yellow': 'Verde, amarillo',
		white: 'Blanco',
		dark: 'Oscuro'
	};

	return translator[word];
}
