import {INodeProperties} from 'n8n-workflow';

// When the resource `ping` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['by_name'],
			},
		},
		options: [
			{
				name: 'Ping',
				value: 'ping',
				action: 'Ping',
				routing: {
					request: {
						method: 'GET',
						url: '=/ping?service={{$parameter.name}}&path={{$parameter.path}}',
					},
				},
			},
		],
		default: 'ping',
	},
];

const pingOperation: INodeProperties[] = [
	{
		displayName: 'Service',
		name: 'name',
		default: 'test',
		description: '/ping/service=&lt;name&gt;',
		displayOptions: {
			show: {
				resource: ['by_name'],
				operation: ['ping'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Path',
		name: 'path',
		default: 'default',
		description: '/ping/service=&lt;name&gt;&path=&lt;path&gt;',
		displayOptions: {
			show: {
				resource: ['by_name'],
				operation: ['ping'],
			},
		},
		type: 'string',
		required: true,
	},
];

export const httpVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
	...pingOperation,
];
