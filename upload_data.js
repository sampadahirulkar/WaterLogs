import { GoogleAuth } from 'google-auth-library';
import serviceAccount from './serviceaccount.json' assert { type: 'json' };
const getAccessToken = async () => {
    const auth = new GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/cloud-platform']
    });
  
    const accessToken = await auth.getAccessToken();
    console.log('Access Token:', accessToken);
  };

  getAccessToken();