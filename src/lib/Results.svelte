<script lang="ts">
	let { go, words, recalled } = $props<{
		go: () => void
		words: string[]
		recalled: string[]
	}>()

	recalled = recalled.map(word => word || "")

	let sent = $state(false)

	$effect(async () => {
		while (localStorage.getItem("sent") != "true") {
			try {
				console.log("sending")
				const result = await fetch("/send", {
					method: "POST",
					body: JSON.stringify({
						words,
						recalled
					})
				})

				if (result.ok) {
					// localStorage.setItem("sent", "true")
					break
				}
			} catch (e) {}
			await new Promise(resolve => setTimeout(resolve, 1000))
		}

		sent = true
	})
</script>

<div class="max-w-screen px-2 w-200">
	<h1 class="pb-4 text-2xl">Your results</h1>

	<div class="<sm:w-80 w-120 grid sm:grid-cols-2 gap-4 py-4 mx-auto">
		{#each words as _, num}
			{@const word = words[num].toLowerCase()}
			{@const recall = recalled[num].toLowerCase()}
			<span
				class="text-xl bg-white p-2 px-4 h-12 rounded-2
				overflow-hidden">
				{num + 1}: {word}
			</span>
			<span
				class="text-xl text-white p-2 px-4 h-12 rounded-2
				overflow-hidden {word === recall ? 'bg-green-500' : 'bg-neutral-500'} ">
				{recall}
			</span>
		{/each}
	</div>

	<p>
		If you misspelled a word, don't worry! As long as we can tell that you
		recalled the word correctly, it will be later marked as correct.
	</p>

	{#if sent}
		<p>
			Your results have been recorded. Please click the button below to
			continue to the debrief page.
		</p>

		<button onclick={go}>Continue</button>
	{:else}
		<p>Please stay on this page while your results are recorded...</p>
	{/if}
</div>
