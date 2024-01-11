<script lang="ts">
	let { length, recall } = $props<{
		length: number
		recall: (recalled: string[]) => void
	}>()

	const recalled = Array(length).fill("")
</script>

<div>
	<p>recal form go here</p>

	<div class="flex flex-col w-50 gap-4 pb-4">
		{#each recalled as _, num}
			<input
				type="text"
				bind:value={recalled[num]}
				class="bg-white border-solid border-1 border-black p-2
				px-4 text-lg rounded-2"
				placeholder="Word {num + 1}" />
		{/each}
	</div>

	<button onclick={() => recall(recalled)}>Continue</button>
</div>
