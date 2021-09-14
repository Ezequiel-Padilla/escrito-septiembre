import axios from 'axios';
import { generateURL } from '../routes';
import TokenService from '../tokenService';

class MeetingController {
  static async register(type, topic, startTime, duration) {
    const response = await axios.post(generateURL('/users/me/meetings'), {
      type,
      topic,
      startTime,
      duration,
    },
    {
      headers: {
        Authorization: 'beader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1OGxmMlBaWlJkYUItMmpVamxKUml3IiwiZXhwIjoxNjMxOTI5NjMyfQ.p5khWEFzfIda-V6j0Sktk9tuVcuIeGGkfkixA26Kzw8',
      },
    });
    TokenService.setUser(response.data);
  }

  static async get() {
    const response = await axios.post(generateURL('/meetings'), {
    },
    {
      headers: {
        Authorization: 'beader eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1OGxmMlBaWlJkYUItMmpVamxKUml3IiwiZXhwIjoxNjMxOTI5NjMyfQ.p5khWEFzfIda-V6j0Sktk9tuVcuIeGGkfkixA26Kzw8',
      },
    });
    TokenService.getUser(response.data);
  }
}

export default MeetingController;
