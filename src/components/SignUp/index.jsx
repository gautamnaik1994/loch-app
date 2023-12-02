function SignUp() {
  return (
    <div className="sign-up">
      <div className="inner">
        <h1>Sign up for exclusive access.</h1>
        <div className="input-group">
          <input type="email" placeholder="Your email address" />
          <div className="error-message">Some errors have occured.</div>
        </div>
        <button role="button" className="big-btn"> Get Started </button>
        <p> You’ll receive an email with an invite link to join. </p>
      </div>
    </div>
  );
}

export default SignUp;
