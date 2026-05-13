import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmMerchantKey, paytmParams } from '../index.js';

export const addPaymentGateway = async (req, res) => {
  try {
    let checksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);

    let params = {
      ...paytmParams,
      'CHECKSUMHASH': checksum   // ✅ spelling fix
    };

    res.status(200).json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
