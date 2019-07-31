import { Notification, NotificationActionResponse } from './Notification';

export interface Registered {
  deviceToken: string;
}

export interface RegistrationError {
  code: string;
  domain: string;
  localizedDescription: string;
}

export interface RegisteredPushKit {
  pushKitToken: string;
}

export interface NotificationResponse {
  identifier: string;
  notification: Notification;
  action?: NotificationActionResponse
}
