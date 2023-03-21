import { writable } from "svelte/store";

export const selectedKanaGroup = writable<string[]>([]);
export const count = writable(0)

export const kanaQuiz = writable([])
export const answered = writable({
    "correctly": 0,
    "incorrectly": 0
}) 