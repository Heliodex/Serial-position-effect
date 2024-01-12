<script lang="ts">
	$effect(() => localStorage.setItem("done", "true"))

	// type secret code to clear local storage
	let code = ""
	const secret = "9739815628938" // hehehe
	$effect(() => {
		window.addEventListener("keydown", e => {
			code += e.code.slice(5)
			if (code == secret) {
				localStorage.clear()
				alert("Local storage cleared!")
				window.location.reload()
			} else if (secret.indexOf(code) != 0) {
				console.log("wrong code")
				console.log("wrong code")
				code = ""
			}
		})
	})
</script>

<div class="max-w-screen px-2 w-200">
	<h1 class="text-2xl">Done!</h1>
	<p>
		Your data has been recorded. If you wish to withdraw your data from this
		study at any time or for any reason, you may email me at <a
			href="mailto:heli@odex.cf"
			target="_blank">
			heli@odex.cf.
		</a>
		If you have any questions or concerns, don't hesitate to ask.
	</p>
	<p>
		The purpose of this study was to investigate the <b>
			serial position effect.
		</b>
		This is the tendency for people to recall the first and last items in a list
		better than the middle items. The data from the experiment will be used in
		my Higher Psychology assignment.
	</p>
	<p>Thank you for participating in this study!</p>
</div>
