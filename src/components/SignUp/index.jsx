import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsError(true);
    } else {
      setIsError(false);
      window.location.href = "https://app.loch.one/welcome";
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="sign-up">
      <div className="inner">
        <h1>Sign up for exclusive access.</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isError && (
              <div className="error-message">
                Please enter valid email address
              </div>
            )}
          </div>
          <button role="button" type="submit" className="big-btn">
            {" "}
            Get Started{" "}
          </button>
        </form>
        <p> You’ll receive an email with an invite link to join. </p>
      </div>
    </div>
  );
}

export default SignUp;
