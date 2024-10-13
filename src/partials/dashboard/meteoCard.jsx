import './meteoCard.css';
function DashboardCardWeather() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Weather Forecast
        </h2>
      </header>
      <div className="p-5">
        {/* Start of the Weather Frame */}
        <div className="frame relative">
          <div className="moon relative">
            <div className="moon-crater1"></div>
            <div className="moon-crater2"></div>
          </div>
          <div className="hill-bg-1"></div>
          <div className="hill-bg-2"></div>
          <div className="hill-fg-1"></div>
          <div className="hill-fg-2"></div>
          <div className="hill-fg-3"></div>

          <div className="front">
            <div>
              <div className="temperature">12°</div>
              <div className="icons">
                <i className="fas fa-wind"></i>
                <br />
                <i className="fas fa-tint"></i>
              </div>
              <div>
                <div className="info">
                  E 7 km/h
                  <br /> 87%
                </div>
                <table className="preview">
                  <tbody>
                    <tr>
                      <td>Tue</td>
                      <td>21° | 9°</td>
                    </tr>
                    <tr>
                      <td>Wed</td>
                      <td>23° | 10°</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="proverb">
              “Frogs croaking in the lagoon,
              <br />
              Means rain will come real soon.”
            </div>
          </div>

          {/* Raindrops */}
          {[...Array(10).keys()].map((i) => (
            <div key={i} className={`drop-big-${i + 1}`}></div>
          ))}
          {[...Array(10).keys()].map((i) => (
            <div key={i} className={`drop-medium-${i + 1}`}></div>
          ))}
          {[...Array(10).keys()].map((i) => (
            <div key={i} className={`drop-small-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardCardWeather;
