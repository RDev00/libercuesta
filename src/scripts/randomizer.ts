export default function Randomizer(number:Number) {
	const newNumber = Math.floor(Math.random() * number) + 1;
	
	return newNumber;
}