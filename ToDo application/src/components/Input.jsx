export default function Input({ todo, setTodo, onClickHandler }) {
	return (
		<>
			<div className="flex gap-2">
				<input
					placeholder="Enter the todo"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button className="bg-blue" onClick={onClickHandler}>
					Submit
				</button>
			</div>
		</>
	);
}
