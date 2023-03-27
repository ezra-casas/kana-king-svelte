import { goto } from "$app/navigation"
import { selectedKanaGroup } from "../../stores"

export function clearAll(e:Event){
    e.preventDefault()

    const checkboxes = document.querySelectorAll("input")
    checkboxes.forEach(box => {
        box.checked = false
    })
    selectedKanaGroup.set([])
}

export function selectAll(e:Event){
    e.preventDefault()

    const checkboxes = document.querySelectorAll("input")
    checkboxes.forEach(box => {
        box.checked = true
        selectedKanaGroup.update(array => [...array, box.value])
    })
} 