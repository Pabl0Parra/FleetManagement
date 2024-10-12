import { useState } from 'react';

const FleetPage = () => {
  const initialBuoys = Array.from({ length: 50 }, (_, i) => ({
    id: `E${(i + 1).toString().padStart(2, '0')}`,
    scheduleTimeStart: '',
    endStatus: '',
    observations: '',
    vrs: '',
    pp: '',
    dl: '',
    currentStatus: '',
    changeFlags: '',
    flags: '',
    ppCaller: '',
    location: '',
    latitude: '',
    longitude: '',
  }));

  const [buoys, setBuoys] = useState(initialBuoys);

  const handleInputChange = (id, field, value) => {
    setBuoys((prevBuoys) =>
      prevBuoys.map((buoy) =>
        buoy.id === id ? { ...buoy, [field]: value } : buoy,
      ),
    );
  };

  return (
    <div>
      <h1>Fleet Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Buoy ID</th>
            <th>Schedule Time Start</th>
            <th>End Status</th>
            <th>Observations</th>
            <th>VRS</th>
            <th>PP</th>
            <th>DL</th>
            <th>Current Status</th>
            <th>Change Flags</th>
            <th>Flags</th>
            <th>PP Caller</th>
            <th>Location</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {buoys.map((buoy) => (
            <tr key={buoy.id}>
              <td>{buoy.id}</td>
              <td>
                <input
                  type="text"
                  value={buoy.scheduleTimeStart}
                  onChange={(e) =>
                    handleInputChange(
                      buoy.id,
                      'scheduleTimeStart',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.endStatus}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'endStatus', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.observations}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'observations', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.vrs}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'vrs', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.pp}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'pp', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.dl}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'dl', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.currentStatus}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'currentStatus', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.changeFlags}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'changeFlags', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.flags}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'flags', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.ppCaller}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'ppCaller', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.location}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'location', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.latitude}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'latitude', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={buoy.longitude}
                  onChange={(e) =>
                    handleInputChange(buoy.id, 'longitude', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FleetPage;
