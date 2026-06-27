import Image from "next/image";
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-[85vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Content */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
            🚀 নতুন আপডেট উপলব্ধ
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-none">
            আপনার বিজনেসকে নিয়ে যান{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              পরবর্তী ধাপে
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
            আমাদের আধুনিক ও শক্তিশালী প্ল্যাটফর্মের মাধ্যমে আপনার দৈনন্দিন কাজকে
            করুন আরও সহজ, দ্রুত এবং সম্পূর্ণ সুরক্ষিত।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg shadow-blue-500/20"
            >
              ফ্রি ট্রায়াল শুরু করুন
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://w3.org"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a> */}
            <LoginButton></LoginButton>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative mx-auto lg:ml-auto max-w-md lg:max-w-none">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute -bottom-10 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          {/* <Image
            className="relative w-full h-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800"
            width={200}
            height={30}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKAzC6f0v0jZfEBjDkLrHNgdt5R_kJlym5bX7-1m8BJcvKg1RD6qCBpwpJlDufK06ERKn6pzC0qO-6tnW-Zvn6B21WEfrfnk5TfyHBJ7oQg&s=10"
            alt="Dashboard Illustration"
          /> */}
        </div>
      </div>
    </section>
  );
}
