export default (store={
	todos:[],
	downs:[]
},{
	type,payload
} )=>{
	if(type==='CREATE_TODO'){
		return {
			...store,
			todos:[payload.text].concat(store.todos)
		}
	}
	if(type==='GET_TODO_DOWN'){
		return {
			...store,
			todos:store.todos.filter((n,i) => i !== payload.index),
			downs:store.downs.concat([store.todos[payload.index]])
		}
	}
	if(type==='GET_DOWN_ITEMS'){
		return {
			...store,
			downs:store.downs.filter((n,i) => i !== payload.index),
			todos:store.todos.concat([store.downs[payload.index]])
		}
	}
	if(type==='GET_TODO_DEL'){
		return {
			...store,
			todos:store.todos.filter((n,i) => i !== payload.index)
		}
	}
	if(type==='GET_DOWN_DEL'){
		return {
			...store,
			downs:store.downs.filter((n,i) => i !== payload.index)
		}
	}
	return store; 
}