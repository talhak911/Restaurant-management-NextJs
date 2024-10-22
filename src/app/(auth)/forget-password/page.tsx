import ForgetPasswordForm from "@/components/forgetPasswordForm/ForgetPasswordForm";

function SignUpPage() {
  return (
    <div className="bg-silk h-screen flex flex-col items-center justify-center">
      <div className="font-semibold bg-sunset pt-5 px-3 pb-8 shadow-2xl rounded-t-2xl">
        <h1 className="flex flex-col text-center  text-xl text-almostBlack bg-silk rounded-2xl p-3">
          <span> Forget </span>
          <span> Password?</span>
        </h1>
      </div>
      <div className="px-16 pt-8 pb-10 bg-sunset rounded-2xl shadow-2xl">
        <ForgetPasswordForm />
      </div>
    </div>
  );
}

export default SignUpPage;
