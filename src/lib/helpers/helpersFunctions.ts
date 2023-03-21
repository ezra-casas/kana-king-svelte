import { selectedKanaGroup } from "../../stores"

export function clearAll(e:Event){
    e.preventDefault()
    selectedKanaGroup.set([])
}

let isChecked = e.target.checked
let group = e.target.value
console.log(`group: ${group}`)

export function boxIsChecked(e:Event){
    if(isChecked){
        isSelected.push(group)
        selectedKanaGroup.update(array => [...array, group])
    }else{
        let index = isSelected.indexOf(group)
        if(index !== -1){
            isSelected.splice(index, 1)
        }
    }
    // console.log(isSelected)
    console.log($selectedKanaGroup)
}

export function selectAll(e:Event){
    e.preventDefault()
    let checkboxes = document.querySelectorAll("input")

    checkboxes.forEach(box => {
        box.checked = true
        selectedKanaGroup.update(array => [...array, box.value])
    })
}
