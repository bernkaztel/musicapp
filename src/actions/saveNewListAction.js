export default function saveNewListAction(newListBundle){
    console.log(newListBundle)
    return {type: "SAVE_NEW_LIST", payload: newListBundle}
}