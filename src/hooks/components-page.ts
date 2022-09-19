// Types
import { ref, watch } from "vue"

// Lodash
import _cloneDeep from "lodash/cloneDeep"

// Types
interface DataItem {
	title: string
	img: string
	route: string
}

export default function useComponents(list: DataItem[]) {
	const componentName = ref<string>("")
	const data = ref<DataItem[]>(_cloneDeep(list))

	const onSearch = (value: string) => {
		data.value = list.filter(({ title }) => {
			return title.toLowerCase().includes(value.toLowerCase())
		})
	}

	watch(componentName, (value) => {
		onSearch(value)
	})

	return { data, componentName }
}
