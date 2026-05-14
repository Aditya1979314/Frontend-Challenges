export default function Box({ num, gameArrayForO, gameArrayForX }) {
	function onChangeHandler(e) {
		if (e.target.value === "X") {
			gameArrayForX(num);
		} else {
			gameArrayForO(num);
		}
	}
	return (
		<>
			<input
				onKeyDown={(e) => {
					if (e.key !== "X" && e.key !== "O" && e.key !== "Backspace")
						e.preventDefault();
				}}
				onChange={onChangeHandler}
				className="w-24 h-24 border-2 border-black text-4xl text-center font-bold outline-none"
				maxLength={1}
			/>
		</>
	);
}
