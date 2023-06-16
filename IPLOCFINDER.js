async function getLocationFromIP(ip) {
    const apiKey = 'YOUR_IPAPI_API_KEY';
    const apiUrl = `https://api.ipapi.com/${ip}?access_key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {
        const { city, region, country_name } = data;
        const location = `${city}, ${region}, ${country_name}`;
        return location;
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  }
  
  // Example usage:
  const ipAddress = '8.8.8.8';
  getLocationFromIP(ipAddress)
    .then(location => {
      if (location) {
        console.log('Location:', location);
      } else {
        console.log('Unable to retrieve location.');
      }
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  