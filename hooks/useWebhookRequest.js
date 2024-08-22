import useBuffer from './useBuffer';
import useNetworkStatus from './useNetworkStatus';
import { sendRequest as sendRequestService } from '@/utils/webhookutil';
import { useEffect, useCallback } from 'react';

const useWebhookRequest = () => {
  const isOnline = useNetworkStatus();
  const { bufferedRequests, addRequestToBuffer, updateBuffredRequests } =
    useBuffer();

  const sendRequest = useCallback(
    async (completeReq) => {
      if (isOnline) {
        sendRequestService(completeReq);
      } else {
        addRequestToBuffer(completeReq);
      }
    },
    [isOnline]
  );

  useEffect(() => {
    let currentBuffer = [...bufferedRequests];
    while (isOnline && currentBuffer.length) {
      const firstReq = currentBuffer.shift();
      sendRequest(firstReq);
    }
    if (currentBuffer.length) {
      updateBuffredRequests(currentBuffer);
    }
  }, [isOnline]);

  return { sendRequest };
};

export default useWebhookRequest;
