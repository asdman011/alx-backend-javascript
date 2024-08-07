function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getFullResponseFromAPI;
