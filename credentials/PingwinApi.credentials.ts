import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class PingwinApi implements ICredentialType {
	name = 'pingwinApi';
	displayName = 'Pingwin API';
	icon = "file:logo.png";
	documentationUrl = 'https://example.com';
	properties: INodeProperties[] = [
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://pingwin.opa',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-Custom-Header': 'n8n-nodes'
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '?service=test-n8n',
		},
	};
}
