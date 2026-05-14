export default function Modal({ winner, resetGame }) {
	return (
		<>
			<div
				className="fixed inset-0 flex items-center justify-center bg-black/50"
				onClick={() => resetGame()}
			>
				<div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
					<h1 className="text-3xl font-bold mb-4 text-green-600">
						Game Over
					</h1>

					<p className="text-xl font-semibold">{winner}</p>
				</div>
			</div>
		</>
	);
}
