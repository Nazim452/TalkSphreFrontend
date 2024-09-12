import { motion } from "framer-motion";
import { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../constants/config";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isloading, setIsloafing] = useState(false);

	const navigate = useNavigate();




	const forgotPassword = async (email) => {
		try {
			setIsloafing(true)


			const config = {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				`${server}/api/v1/user/forgot-password`, { email }, config

			);

			// toast.success("Email verified Successfully")






			console.log("Forgot Password Response", response);
			setIsloafing(false)


		} catch (error) {
			console.log("Error While Forget Password", error);
			setIsloafing(false)



		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<div className="flex items-center justify-center mt-[100px] ">


			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='max-w-md w-full bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
			>
				<div className='p-8'>
					<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
						Forgot Password
					</h2>

					{!isSubmitted ? (
						<form onSubmit={handleSubmit}>
							<p className='text-gray-300 mb-6 text-center'>
								Enter your email address and we'll send you a link to reset your password.
							</p>
							<Input

								type='email'
								placeholder='Email Address'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
								type='submit'
							>
								{isloading ? "Sending..." : "Send Reset Link"}
							</motion.button>
						</form>
					) : (
						<div className='text-center'>
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ type: "spring", stiffness: 500, damping: 30 }}
								className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'
							>

							</motion.div>
							<p className='text-gray-300 mb-6'>
								If an account exists for {email}, you will receive a password reset link shortly.
							</p>
						</div>
					)}
				</div>

				<div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
					<Link to={"/login"} className='text-sm text-green-400 hover:underline flex items-center'>
						Back to Login
					</Link>
				</div>
			</motion.div>

		</div>
	);
};
export default ForgotPasswordPage;


