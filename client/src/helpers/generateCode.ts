export default function generateCode(): string {
	let code = '';

	for (let index = 0; index < 8; index++) {
		const char = Math.floor(Math.random() * 9);

		code += char;
	}

	return code;
}
