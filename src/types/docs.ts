export namespace Docs {
	export type Data = DataItem[]

	export interface DataItem {
		key: string
		property: string
		type: string
		default: string
		values?: any
	}
}
