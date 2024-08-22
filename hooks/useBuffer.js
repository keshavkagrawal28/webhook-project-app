import { useState, useCallback } from 'react';

const useBuffer = () => {
  const [bufferedRequests, setBufferedRequests] = useState([]);

  const addRequestToBuffer = useCallback((req) => {
    setBufferedRequests((prevBuffer) => [...prevBuffer, req]);
  }, []);

  const updateBuffredRequests = useCallback((buffer) => {
    setBufferedRequests(buffer);
  }, []);

  return {
    bufferedRequests,
    addRequestToBuffer,
    updateBuffredRequests,
  };
};

export default useBuffer;
