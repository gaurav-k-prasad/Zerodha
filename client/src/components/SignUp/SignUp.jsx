import { useState } from "react";
import { signup } from "../../assets/Images";
import { signupTerms } from "../../constants";
import Button from "../General/Button";

const SignUp = () => {
	const [input, setInput] = useState("");

	return (
		<>
			<main>
				<section className="mt-28  max-container">
					<div className="m-48 mt-0">
						<div className="flex items-center justify-center gap-28">
							<img src={signup} alt="" className="w-1/2" />
							<div className="w-1/2">
								<h2 className="text-3xl text-darkgray font-semibold">SignUp now</h2>
								<p className="text-gray-400 my-3">Or track your existing application</p>

                                <div className="my-5">
                                    <label htmlFor="phone">Mobile Number</label>
                                    <br />
                                    <input
                                        type="number"
                                        value={input}
                                        onChange={(event) => setInput(event.target.value)}
                                        id="phone"
                                        name="phone"
                                        className="border-gray-200 px-3 py-2 border-2 rounded-sm"
                                    />
                                </div>
								<p className="text-gray-500 text-xs">You will receive an OTP on your number</p>

								<Button text="Continue" />
                                <br />

								<a href="/" className="text-xs">Want to open an NRI account?</a>
							</div>
						</div>
						<div>
							{signupTerms.map((term, i) => (
								<p key={i} className="text-center text-gray-500 my-3 text-xs max-w-">
									{term}
								</p>
							))}
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default SignUp;
