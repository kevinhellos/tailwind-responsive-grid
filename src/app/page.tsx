"use client"

export default function page() {
  return (
    <div>

      <h1 className="px-5 mt-5">Grid - 4 columns on <span className="font-medium">all screen sizes & viewport</span></h1>
      <p className="px-5 mb-10 w-fit bg-gray-100">grid grid-cols-4</p>
      <div className="grid grid-cols-4">
        <div className="bg-red-500">Hello</div>
        <div className="bg-green-500">Hello</div>
        <div className="bg-blue-500">Hello</div>
        <div className="bg-yellow-500">Hello</div>
      </div>

      <h1 className="px-5 mt-20">
        Grid - 4 columns on <span className="font-medium text-red-500">large screens</span> <br />
        Grid - 2 columns on <span className="font-medium text-blue-500">medium screens</span>
      </h1>
      <p className="px-5 mb-10 w-fit bg-gray-100">grid <span className="text-blue-500">md</span>:grid-cols-2 <span className="text-red-500">lg</span>:grid-cols-4</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-red-500">Hello</div>
        <div className="bg-green-500">Hello</div>
        <div className="bg-blue-500">Hello</div>
        <div className="bg-yellow-500">Hello</div>
      </div>

      <h1 className="px-5 mt-20">
        Grid - 6 columns on <span className="font-medium text-red-500">large screens</span> <br />
        Grid - 3 columns on <span className="font-medium text-blue-500">medium screens</span>
      </h1>
      <p className="px-5 mb-10 w-fit bg-gray-100">grid <span className="text-blue-500">md</span>:grid-cols-3 <span className="text-red-500">lg</span>:grid-cols-6</p>
      <div className="grid md:grid-cols-3 lg:grid-cols-6">
        <div className="bg-red-500">Hello</div>
        <div className="bg-green-500">Hello</div>
        <div className="bg-blue-500">Hello</div>
        <div className="bg-yellow-500">Hello</div>
        <div className="bg-indigo-500">Hello</div>
        <div className="bg-cyan-300">Hello</div>
      </div>

    </div>
  )
}
