<template>
    <div class="welcome">
        <div class="background-image"></div>
        <div class="content">
            <h1>Amazing<sup>2</sup><br>Conference</h1>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tem tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim.</div>
            <div class="date">Warsaw, May 5 2020</div>
            <div class="button-action">Register</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "welcome",
}
</script>

<style scoped>
    .welcome {
        position: relative;
        background-color: #6227b5;
        width: max(100%, 300px);
        height: max(calc(100vh - 2px), 600px);
        color: white;
    }

    .background-image {
        position: absolute;
        background-image: url("../assets/welcome.jpg");
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        opacity: 0.7;
        height: 100%;
        width: 100%;
    }

	.content {
		position: relative;
        max-width: min(100%, 480px);
		top: 50%;
		transform: translateY(-50%);
		font-size: min(15px, 3vw);
		padding-left: 15%;
        padding-right: 15%;
	}

    .date {
        margin-top: 1em;
        font-style: italic;
    }

    sup {
        padding-left: 5px;
    }
</style>