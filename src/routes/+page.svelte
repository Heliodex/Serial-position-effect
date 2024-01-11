<script lang="ts">
	import Info from "$lib/Info.svelte"
	import Consent from "$lib/Consent.svelte"
	import Countdown from "$lib/Countdown.svelte"
	import Words from "$lib/Words.svelte"
	import Recall from "$lib/Recall.svelte"
	import Results from "$lib/Results.svelte"

	import Wordlist from "$lib/Words.json"

	const length = 20
	let randomWords: string[] = []
	let recalledWords: string[] = $state(Array(length).fill(""))

	for (let i = 0; i < length; i++)
		randomWords.push(Wordlist[Math.floor(Math.random() * Wordlist.length)])
	
	let page = $state(6)
	const go = () => page++
</script>

{#if page == 1}
	<Info {go} />
{:else if page == 2}
	<Consent {go} />
{:else if page == 3}
	<Countdown {go} />
{:else if page == 4}
	<Words {go} words={randomWords} />
{:else if page == 5}
	<Recall length={randomWords.length} recall={(list: string[]) => {
		recalledWords = list
		go()
	}}/>
{:else if page == 6}
	<Results words={randomWords} recalled={recalledWords} />
{/if}
