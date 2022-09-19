export default function useDocs() {
	const columns = [
		{
			title: "Property",
			dataIndex: "property",
			key: "property"
		},
		{
			title: "Value",
			dataIndex: "value",
			key: "value"
		},
		{
			title: "Type",
			dataIndex: "type",
			key: "type"
		},
		{
			title: "Default",
			key: "default",
			dataIndex: "default"
		}
	]

	return {
		columns
	}
}
