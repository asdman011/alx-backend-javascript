function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API request or asynchronous operation
    const requestWasSuccessful = true; // Simulating a successful request

    if (requestWasSuccessful) {
      const response = {
        status: 200,
        body: 'photo-profile-1',
      };
      // Resolving the Promise with the response data
      resolve(response);
    } else {
      // If there was an error, reject the Promise with an error message
      reject(new Error('Failed to fetch data from the API'));
    }
  });
}

export default getResponseFromAPI;
