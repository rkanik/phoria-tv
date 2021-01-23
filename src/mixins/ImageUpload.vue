<script>
export default {
	name: 'ImageUpload',
	methods: {
		onFileChoosed(event, callback) {
			const files = event.target.files
			if (files.length) {
				files.forEach(file => {
					let reader = new FileReader();
					reader.addEventListener("load", () => {
						callback(reader.result, file)
					}, false);
					reader.readAsDataURL(file);
				})
			}
		},
	}
}
</script>
