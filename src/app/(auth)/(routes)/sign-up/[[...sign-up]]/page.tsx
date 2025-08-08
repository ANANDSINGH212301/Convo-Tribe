import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        variables: {
          colorPrimary: "#1447e6",
          fontFamily: "Inter, sans-serif",
          borderRadius: "0.75rem",
        }
      }}
    />
  );
}
