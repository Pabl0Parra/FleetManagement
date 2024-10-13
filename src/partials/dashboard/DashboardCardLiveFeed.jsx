function DashboardCardLiveFeed() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Live Video Feed
        </h2>
      </header>
      <div className="p-5">
        <div className="p-5 flex-grow">
          <div className="aspect-w-16 aspect-h-7 w-full">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Live Video Feed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md w-full h-full object-cover border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCardLiveFeed;
