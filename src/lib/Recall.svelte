<script lang="ts">
	let { length, recall } = $props<{
		length: number
		recall: (recalled: string[]) => void
	}>()

	const recalled = Array(length).fill("")
</script>

<div class="max-w-screen px-2 w-200">
	<h1 class="text-2xl">Recall the words</h1>
	<p>
		Please recall as many words as you can in the order they were shown, and
		press continue when you have remembered as many as you can.
	</p>
	<p>Remember that each word must be 10 letters long.</p>

	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<form
		class="w-full flex flex-col w-50 gap-4 py-4 items-center"
		onkeypress={e => {
			// preventDefault if the user pressed enter accidentally
			if (e.key === "Enter") e.preventDefault()
		}}
		onsubmit={() => recall(recalled)}>
		{#each recalled as _, num}
			<input
				type="text"
				minlength="10"
				maxlength="10"
				bind:value={recalled[num]}
				class="bg-white border-solid border-1 border-black p-2
				px-4 text-lg rounded-2"
				placeholder="Word {num + 1}" />
		{/each}
		<button>Continue</button>
	</form>
</div>
