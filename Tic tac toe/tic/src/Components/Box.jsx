export default function Box({ num, board, next, onChangeHandler }) {
	return (
		<>
			<input
				value={board[num]}
				onKeyDown={(e) => {
					if (e.key !== next) e.preventDefault();
				}}
				onChange={(e) => onChangeHandler(e, num)}
				className="w-24 h-24 border-2 border-black text-4xl text-center font-bold outline-none"
				maxLength={1}
			/>
		</>
	);
}
