<script lang="ts">
	import Info from "$lib/Info.svelte"
	import Consent from "$lib/Consent.svelte"
	import Countdown from "$lib/Countdown.svelte"
	import Words from "$lib/Words.svelte"
	import Recall from "$lib/Recall.svelte"
	import Results from "$lib/Results.svelte"

	import Wordlist from "$lib/words.json"
	import Debrief from "$lib/Debrief.svelte"

	const length = Math.random() > 0.5 ? 10 : 20
	let randomWords: string[] = []
	let recalledWords: string[] = $state(Array(length).fill(""))

	for (let i = 0; i < length; i++) {
		// prevent duplicates
		const randomWord = Wordlist[Math.floor(Math.random() * Wordlist.length)]
		if (!randomWords.includes(randomWord)) randomWords.push(randomWord)
		else i--
	}
	
	let page = $state(0)

	$effect(() => {
		if (localStorage.getItem("done") === "true") page = 7
		else if (localStorage.getItem("sent") === "true") page = 6
		else page = 1
	})

	const go = () => page++
</script>

{#if page == 1}
	<Consent {go} />
{:else if page == 2}
	<Info {go} {length}/>
{:else if page == 3}
	<Countdown {go} />
{:else if page == 4}
	<Words {go} words={randomWords} />
{:else if page == 5}
	<Recall {length} recall={(list: string[]) => {
		recalledWords = list
		go()
	}}/>
{:else if page == 6}
	<Results {go} words={randomWords} recalled={recalledWords} />
{:else if page == 7}
	<Debrief  {length}/>	
{:else}
	<h1>Loading...</h1>
{/if}
