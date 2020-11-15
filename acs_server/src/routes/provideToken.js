import { AzureCommunicationUserCredential } from '@azure/communication-common';
import { sendNotification } from './sendNotification';
const { CommunicationIdentityClient } = require('@azure/communication-administration');
const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];
const identityClient = new CommunicationIdentityClient(connectionString);

