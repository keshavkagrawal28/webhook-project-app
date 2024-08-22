import useWebhookRequest from '@/hooks/useWebhookRequest';
import { createCompleteRequest } from '@/utils/webhookutil';

export default function Home() {
  const { sendRequest } = useWebhookRequest();
  const webhookUrl = 'https://webhook.site/da2b574f-7a6f-4046-8665-934dbf7e2b7d';

  const handleButtonClick = () => {
    const requestData = {
      message: 'Hi! This request was created by Keshav Agrawal.',
      reqTime: new Date().getTime(),
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
