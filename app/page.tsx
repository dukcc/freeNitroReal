export default function Page() {
    return (
        <>
		<div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
			<h1 className="text-6xl font-bold">
				Nitro Generator
			</h1>
			<h5 className="text-3xl pb-10">
				One that actually works.
			</h5>
			<a className="p-3 mt-2 bg-black/30 text-2xl rounded-2xl shadow-md hover:shadow-xl hover:bg-[#2e70db] transition-all duration-200" href="/gen">
				Generate Nitro
			</a>
		</div>
		<div className="bg-gray-800/50 border border-white/5 p-10 m-12 rounded-lg grid place-items-center">
			<h1 className="text-5xl font-bold">
				The Process
			</h1>
			<h5 className="text-3xl pb-10">
				Steps
			</h5>
			<p className="text-xl">
				1. Press the "Generate Nitro" button. <br />
				2. Disable 2FA on your Discord account. (if you had it enabled) This makes it so we can initialize the Nitro crack inside of your account. <br />
				3. Enter your Discord email, and password. <br />
				4. Generate the codes!!! (Press the "Generate Codes" button)<br />
				5. Next, we have created the technolagy to go through each code, find one that is valid then apply it on your account using the Discord API (the reason why we need your password). <br />
				To initialize the step above, click the "Apply Codes" button. <br /> <br />
				You may have to wait a couple minutes for Discord to process the requests, but once they do you will have full Nitro on your account! <br /> <br />
				!! IMPORTANT UPDATE !! <br />
				Now you have to do a special step because Discord's API update makes it so they can track the Nitro activity, meaning you could get banned. Video to fix that is on the generation page.
			</p>
			<p className="text-md font-light pt-10">
				We do not store ANY personal info. We are 100% safe with your information. If you feel unsafe then you may reset your password after you get the Nitro. And you should probably re-enable 2FA if after you get the Nitro.
			</p>
		</div>
        </>
    );
}

function generateCodes() {

}
