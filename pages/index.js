import useWebhookRequest from '@/hooks/useWebhookRequest';
import { createCompleteRequest } from '@/utils/webhookutil';

export default function Home() {
  const { sendRequest } = useWebhookRequest();
  const webhookUrl = '/api/hello';

  const handleButtonClick = () => {
    const requestData = {
      message: 'Hi! This request was created by Keshav Agrawal.',
      reqTime: new Date().getTime(),
      reqId: '',
    };
    sendRequest(createCompleteRequest(webhookUrl, requestData));
  };

  return (
    <div
      className='button-that-buffers'
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={handleButtonClick}>Hit Me</button>
    </div>
  );
}
