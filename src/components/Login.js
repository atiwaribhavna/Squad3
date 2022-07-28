import "./Login.css";
import logo from "./../assets/bhavna.png";
// import profile from "./../image/a.png";
import email from "./../assets/email.jpg";
import pass from "./../assets/pass.png";
function Login() {
	return (
		<div className="main">
			<div className="sub-main">
				<div>
					<div className="imgs">
						<div className="container-image">
							<img src={logo} alt="profile" className="profile" />
						</div>
					</div>
					<div>
						<h1>Welcome Back!</h1>
						<div>
							<img src={email} alt="email" className="email" />
							<input
								type="text"
								placeholder="Username"
								className="name"
							/>
						</div>
						<div className="second-input">
							<img src={pass} alt="pass" className="email" />
							<input
								type="password"
								placeholder="Password"
								className="name"
							/>
						</div>
						<div className="login-button">
							<button>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
