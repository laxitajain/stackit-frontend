import LoginForm from "@/app/_components/LoginForm";

export const metadata = {
  title: "Login",
};

export default function SignInPage() {
  return (
    <div className=" flex justify-center px-4">
      <LoginForm />
    </div>
  );
}
