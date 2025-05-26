// components/footer/Newsletter.js
export default function Newsletter() {
  return (
    <div className="w-full grid justify-center items-center md:flex md:justify-start md:items-start gap-[24px] px-4 mx-auto">
      {/* Text Content */}
      <div className="text-white text-center md:text-start max-w-xl">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
          Get up to N5,000 off* your first order<br />when you sign up for emails
        </h2>
        <p className="text-lg md:text-xl font-semibold md:text-start text-center">Proin vel justo nec nisi ullamcorper pretium.</p>
      </div>

      {/* Form */}
      {/* <div className="w-full max-w-md items-center gap-4 mt-4 max-w-xl">
        <label className="w-full text-white text-center text-xl font-semibold">Sign up Now!</label>
        <div className="w-full flex flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-1 px-4 py-3 bg-white bg-opacity-20 text-white placeholder:text-white placeholder:opacity-70 rounded-sm focus:outline-none"
          />
          <button className="px-6 py-2 bg-blue-700 hover:bg-blue-800 shadow outline outline-1 outline-white rounded-sm transition-colors duration-300">
            <span className="text-white text-base font-extrabold tracking-wide uppercase">SIGN UP</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}