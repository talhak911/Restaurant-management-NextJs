import SignInForm from "@/components/signInForm/SignInForm";

function SignUpPage() {
  return (
    <div className="bg-silk h-screen flex flex-col items-center justify-center">
      <div className="font-semibold bg-sunset pt-5 px-3 pb-8 shadow-2xl rounded-t-2xl">
        <h1 className="text-center  text-xl text-almostBlack bg-silk rounded-2xl p-3">
          Sign In
        </h1>
      </div>
      <div className="px-16 pt-8 pb-10 bg-sunset rounded-2xl shadow-2xl">
        <SignInForm />
      </div>
    </div>
  );
}

export default SignUpPage;
