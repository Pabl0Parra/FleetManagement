// src/data/mockData.js

// Helper function to pad numbers with leading zeros
const padNumber = (number, length = 2) => {
  return String(number).padStart(length, '0');
};

// Helper function to generate random XYZ string
const generateRandomXYZ = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length: 3 },
    () => chars[Math.floor(Math.random() * chars.length)],
  ).join('');
};

// Generate mock data
export const mockData = Array.from({ length: 50 }, (_, i) => {
  const machineNumber = padNumber(i + 1);
  const monthNumber = padNumber((i % 12) + 1); // Ensuring months range from 01 to 12

  const randomXYZ = generateRandomXYZ();

  return {
    buoyName: `E${machineNumber}`,
    buoyID: `${machineNumber}`,
    buoyStatus: i % 2 === 0 ? 'Active' : 'Inactive',
    projectName: `EOL - ${randomXYZ}`,
    projectManager: `Manager ${i + 1}`,
    projectCoordinates: `36.${machineNumber}N, -122.${machineNumber}W`,
    clientName: `Client ${i + 1}`,
    clientLogo: 'https://via.placeholder.com/50',
    dataloggerVersion: `v${i + 1}.0`,
    deploymentDate: `2023-${monthNumber}-01`,
    endDate: `2024-${monthNumber}-01`,
  };
});
