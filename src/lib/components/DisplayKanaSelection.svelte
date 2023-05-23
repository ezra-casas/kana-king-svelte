<script lang="ts">
	import { kana } from '../../data/dictionary';
	import { selectedKanaGroup, number_of_questions } from '../../stores';
	import { clearAll, selectAll, quizMe, handleCheckboxChange } from '../helpers/helpersFunctions';

	const [hiraganaArray, katakanaArray] = kana;
	const availableHiragana = Object.keys(hiraganaArray);
	const availableKatakana = Object.keys(katakanaArray);

	let number_selected = 10;
	$: number_of_questions.set(number_selected);
</script>

<section>
	<div class="kanaGroup">
		<!-- HIRAGANA -->
		<div class="hiragana kana">
			{#each availableHiragana as group, index}
				{#if index < 10}
					<label>
						<input
							class="kana-selection"
							type="checkbox"
							value={group}
							on:click={(event) => handleCheckboxChange(event, selectedKanaGroup)}
						/>
						<span class="checkmark" />
						{Object.keys(hiraganaArray[availableHiragana[index]])[0]}
					</label>
				{/if}
			{/each}
		</div>
		<!-- Special HIRAGANA -->
		<div id="specialGroup" class="visible">
			<div class="s-hiragana s-kana">
				{#each availableHiragana as _, index}
					{#if index + 10 < availableHiragana.length}
						<label>
							<input
								id=""
								type="checkbox"
								value={availableHiragana[index + 10]}
								on:click={(event) => handleCheckboxChange(event, selectedKanaGroup)}
							/>
							<span class="checkmark" />
							{Object.keys(hiraganaArray[availableHiragana[index + 10]])[0]}
						</label>
					{/if}
				{/each}
			</div>
			<hr />
		</div>

		<!-- KATAKANA -->
		<div class="katakana kana">
			{#each availableKatakana as group, index}
				{#if index < 10}
					<label>
						<input
							class="kana-selection"
							type="checkbox"
							value={group}
							on:click={(event) => handleCheckboxChange(event, selectedKanaGroup)}
						/>
						<span class="checkmark" />
						{Object.keys(katakanaArray[availableKatakana[index]])[0]}
					</label>
				{/if}
			{/each}
		</div>
		<!-- SPECIAL KATAKANA -->
		<div id="specialGroup" class="visible">
			<div class="s-katakana s-kana">
				{#each availableKatakana as group, index}
					{#if index + 10 < availableKatakana.length}
						<label>
							<input
								type="checkbox"
								value={group}
								on:click={(event) => handleCheckboxChange(event, selectedKanaGroup)}
							/>
							<span class="checkmark" />
							{Object.keys(katakanaArray[availableKatakana[index + 10]])[0]}
						</label>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</section>

<div class="btn-container">
	<div class="buttons">
		<button class="button" on:click={(event) => selectAll(event, selectedKanaGroup)}>
			Select All
		</button>
		<button class="button" on:click={clearAll}>Clear All</button>
		<button class="button" on:click={quizMe($selectedKanaGroup)}>Quiz Me</button>
		<input
			bind:value={$number_of_questions}
			type="number"
			name="number"
			id="number"
			min="1"
			max="30"
		/>
	</div>

	<h1 id="no_groups" class="notVisible">Please select a group of kana</h1>
</div>

<style>
	.notVisible {
		visibility: hidden;
		color: #ff6f6f;
	}
	#specialGroup,
	.visible {
		animation: fadeIn 2s ease-in-out;
	}
	.visible {
		display: none;
	}

	.kanaGroup {
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		width: 600px;
		flex-direction: column;
		gap: 0.5rem;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}
	.kana,
	.s-kana {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.kana input,
	.s-kana input {
		display: none;
	}
	.checkmark {
		display: inline-block;
		width: 16px;
		height: 16px;
		background-color: #eee;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
		border-radius: 2px;
	}
	.kana input:checked + .checkmark,
	.s-kana input:checked + .checkmark {
		background-color: #21f364;
		box-shadow: none;
	}
	.kana label {
		display: inline-block;
		font-size: 22px;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}
	.s-kana label {
		display: inline-block;
		-webkit-user-select: none; /* Safari */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* IE10+/Edge */
		user-select: none; /* Standard */
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.btn-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-self: center;
	}

	.buttons {
		padding-top: 15px;
		display: flex;
		gap: 1.2rem;
		justify-content: space-around;
	}
	.buttons input {
		width: 50px;
		border-radius: 10px;
		border: none;
		padding: 15px;
	}
	button {
		background-color: #ffffff;
		border-radius: 10px;
		width: 100px;
		height: 50px;
		border: none;
		user-select: none;
		box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.363);
	}
	button:active {
		transform: scale(1.2);
		background-color: rgb(172, 172, 172);
	}
	button:last-child {
		font-weight: bolder;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}
	@media (max-width: 767px) {
		.k anaGroup {
			display: flex;
			flex-wrap: wrap;
			gap: 1.3rem;
			width: 300px;
			height: 100%;
		}
		input[type='checkbox'] {
			transform: scale(1.5);
			margin: 10px;
		}
	}

	@media only screen and (-webkit-min-device-pixel-ratio: 2) {
		.btn-container {
			justify-content: center;
			width: 300px;
		}
	}
</style>
