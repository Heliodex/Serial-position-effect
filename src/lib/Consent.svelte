<script lang="ts">
	const { go } = $props<{
		go: () => void
	}>()

	let submitted = $state(false)
	let passcode = $state("")
</script>

<div class="max-w-screen px-2 w-200">
	<div class="pb-4">
		<h1 class="text-2xl">
			Please read this page carefully before continuing.
		</h1>
		<p>Thank you for participating in this psychological study.</p>
		<p>
			This is a study on memory for my Higher psychology assignment. You
			will complete a short memory test that will take between 1 and 3
			minutes. More information will be provided on the next page.
		</p>
		<p>
			This study abides by the ethical guidelines set by the <a
				href="https://www.bps.org.uk"
				target="_blank">
				British Psychological Society.
			</a>
			You have the right to withdraw from the study at any time and for any
			reason. Your data will not be stored if you withdraw from the study.
		</p>
	</div>

	<form
		onsubmit={() => {
			submitted = true

			if (passcode.toLowerCase() == "psychology") go()
		}}>
		<div class="flex flex-col gap-3 pb-4">
			<div class="grid grid-cols-[2rem_1fr] gap-2">
				<input type="checkbox" required id="1" />
				<label for="1">
					I have read and understood this consent form.
				</label>
				<input type="checkbox" required id="2" />
				<label for="2">
					I understand that I am free to withdraw from the study at
					any time and for any reason, and my data will not be stored.
				</label>
				<input type="checkbox" required id="3" />
				<label for="3">
					I understand that my data will be published, and that my
					identity will remain anonymous and will not be associated
					with my data.
				</label>
				<input type="checkbox" required id="4" />
				<label for="4">I confirm that I am over the age of 16.</label>
			</div>

			<label for="passcode" class="pt-8">
				Please enter the passcode provided to you to proceed.
			</label>
			<input
				required
				id="passcode"
				type="text"
				bind:value={passcode}
				class="bg-white border-solid border-1 border-black p-2
				px-4 text-lg rounded-2 w-50"
				placeholder="passcode" />
			{#if submitted}
				<!-- won't show if immediately redirected -->
				<span class="text-red-500">Incorrect passcode</span>
			{/if}
		</div>

		<button>Next</button>
	</form>
</div>
