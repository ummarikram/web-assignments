export default function Body() {

    return (
        <>
            <div className="ml-8 mt-24 flex flex-col items-center">
                <h1 className="flex-wrap text-[#ff9d00] text-6xl">Make bright ideas happen</h1>
                <p className="mt-4 texl-3xl font-bold">Access global talent on the freelancer website trusted by over 1 million businesses worldwide.</p>

                <div class="flex relative mt-6 float-left">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Try ecommerce..." />
                </div>

            </div>



        </>
    );
}