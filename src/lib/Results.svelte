<script lang="ts">
	let { words, recalled } = $props<{
		words: string[]
		recalled: string[]
	}>()

	recalled = recalled.map(word => word || "")
</script>

<div>
	<h1 class="pb-4 text-2xl">Your results</h1>

	<div class="grid grid-cols-2 gap-4 w-120">
		<div class="flex flex-col gap-4">
			{#each words as word, num}
				<span
					class="text-xl bg-white p-2 px-4 h-full rounded-2
					overflow-hidden">
					{num + 1}: {word}
				</span>
			{/each}
		</div>
		<div class="flex flex-col gap-4">
			{#each recalled as word, num}
				<span
					class="text-xl text-white p-2 px-4 h-full rounded-2
					overflow-hidden {word == words[num] ? 'bg-green-500' : 'bg-red-400'} ">
					{word}
				</span>
			{/each}
		</div>
	</div>
</div>
