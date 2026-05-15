import { useState } from "react";

export default function Modal({
	updateTodo,
	setUpdateTodo,
	onClickHandlerUpdate,
}) {
	const [inputval, setInputval] = useState(updateTodo.name);

	return (
		<div
			onClick={() => setUpdateTodo(null)}
			className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
		>
			<div
				className="bg-white p-6 rounded-lg w=[500px]"
				onClick={(e) => e.stopPropagation()}
			>
				<input
					placeholder="Enter the todo"
					value={inputval}
					onChange={(e) => setInputval(e.target.value)}
				/>
				<button
					className="bg-blue"
					onClick={() =>
						onClickHandlerUpdate(updateTodo.id, inputval)
					}
				>
					Update
				</button>
			</div>
		</div>
	);
}
