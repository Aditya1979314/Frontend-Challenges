export default function Modal({ winner }) {
	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-black/50">
				<div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
					<h1 className="text-3xl font-bold mb-4 text-green-600">
						Game Over
					</h1>

					<p className="text-xl font-semibold">
						The winner is {winner}
					</p>
				</div>
			</div>
		</>
	);
}
