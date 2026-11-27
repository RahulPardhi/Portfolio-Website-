import { handleContactRequest } from '../server/contactHandler.js';

export default async function contact(req, res) {
  try {
    await handleContactRequest(req, res);
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({
      success: false,
      message: 'The contact service is temporarily unavailable. Please try again later.',
    });
  }
}
