import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center bg-black/30 backdrop-blur-xl p-8"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >
      <nav className="w-[90rem] rounded-full min-h-20 flex items-center justify-between absolute top-0 backdrop-blur-3xl mx-40 my-4 px-6 bg-black/5">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={160}
            height={160}
            className="w-auto h-16 animate-fade-logo"
            priority
          />
          <h1 className="text-2xl font-bold tracking-wide flex items-center space-x-1">
            <span className="text-white animate-slide-left">Convo</span>
            <span className="text-blue-700 animate-slide-top">Tribe</span>
          </h1>
        </div>
      </nav>

      <div className="mt-12">{children}</div>
    </div>
  );
};

export default AuthLayout;
