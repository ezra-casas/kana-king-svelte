<script lang="ts">
	import { number_of_questions } from '../../stores';
	const n_questions = $number_of_questions;

	export function randomizeKana(
		kanaGroupsToSelectFrom: string[],
		selectedValues: string[][],
		hiraganaArray: [key: string],
		katakanaArray: [key: string]
	): string[] {
		let kanaGroup: string[] = [];
		try {
			while (kanaGroup.length < 10) {
				let groupFound = false;
				for (let i = 0; i < kanaGroupsToSelectFrom.length; i++) {
					const kanaGroupToSelectFrom = kanaGroupsToSelectFrom[i];
					const groupFirstLetter: string = kanaGroupToSelectFrom[0];
					const isLessThanKanaGroup: boolean = kanaGroup.length < 10;

					if (groupFirstLetter === 'h' && isLessThanKanaGroup) {
						const currentKanaKeys: string[] = Object.keys(hiraganaArray[kanaGroupsToSelectFrom[i]]);
						const currentKanaValues: string[][] = Object.values(
							hiraganaArray[kanaGroupsToSelectFrom[i]]
						);

						addRandomKana(currentKanaKeys, currentKanaValues, kanaGroup, selectedValues);

						groupFound = true;
					}

					if (groupFirstLetter === 'k' && isLessThanKanaGroup) {
						const currentKanaKeys: string[] = Object.keys(katakanaArray[kanaGroupsToSelectFrom[i]]);
						const currentKanaValues: string[][] = Object.values(
							katakanaArray[kanaGroupsToSelectFrom[i]]
						);
						addRandomKana(currentKanaKeys, currentKanaValues, kanaGroup, selectedValues);
						groupFound = true;
					}
				}
				if (!groupFound) {
					throw new Error('Could not find suitable kana groups to select from');
				}
			}
		} catch (error) {
			console.error('An error occurred while randomizing kana:', error);
			return [];
		}
		return kanaGroup;
	}

	export function funcTest() {
		console.log('worked');
	}
</script>
