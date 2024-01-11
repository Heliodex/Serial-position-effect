<script lang="ts">
	import Timer from "./Timer.svelte"

	const { go, words } = $props<{
		go: () => void
		words: string[]
	}>()

	const time = 1
	const length = words.length
	let word = $state(0)

	$effect(() => {
		const interval = setInterval(() => {
			word++
			if (word >= length) {
				clearInterval(interval)
				go()
			}
		}, time * 1000)
	})
</script>

<div class="flex flex-col items-center">
	<span class="text-2xl">Word {word + 1} of {length}</span>
	<h1 class="text-6xl">{words[word]}</h1>

	<div class="pt-4">
		{#key word}
			<Timer {time} />
		{/key}
	</div>
</div>
