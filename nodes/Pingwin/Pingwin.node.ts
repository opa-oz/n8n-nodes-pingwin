import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class Pingwin implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Pingwin',
		name: 'pingwin',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:logo.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Ping Pingwin endpoint',
		defaults: {
			name: 'Pingwin',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'pingwinApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{$credentials?.domain}}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'By Name',
						value: 'by_name',
					},
				],
				default: 'by_name',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
