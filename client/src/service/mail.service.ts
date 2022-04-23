import { axiosInstance } from "lib/axios";

export interface sendConfirmationCodePayload {
  code: string;
  email: string;
}

export default class MailService {
  static async sendConfirmationEmail(
    payload: sendConfirmationCodePayload
  ): Promise<string> {
    const { data } = await axiosInstance({
      method: "POST",
      data: payload,
      url: "mail/code",
    });

    return data;
  }
}
