export const createCompleteRequest = (url, reqData) => ({
  url,
  init: {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  },
});

export const sendRequest = async (completeReq) => {
  // If system is online, request that result in error will not be added to buffer
  // Since all requests are resulting in an request limit exceeded error at the current moment in given webhook url
  try {
    const response = await fetch(completeReq.url, completeReq.init);
    if (!response.ok) {
      throw new Error('Error sending request to webhook');
    }
    console.log('Request sent to webhook', completeReq);
  } catch (err) {
    console.log('Error sending request to webhook', err);
  }
};
