<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
	* {
		margin: 0;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		font-weight: 400;
	}

    sup {
        padding-left: 5px;
    }

	h1 {
		font-size: 78px;
		font-weight: 800;
		line-height: 100%;
		user-select: none;
		margin-bottom: 35px;
	}

	h2 {
		font-size: 64px;
		font-weight: 800;
		line-height: 100%;
		user-select: none;
		margin-bottom: 35px;
	}

    .container {
		position: relative;
        width: 100%;
        height: 60vh;
        color: #250b47;
    }

	.content-left {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		font-size: 15px;
		padding-left: 15%;
	}

	.content-right {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		font-size: 15px;
		padding-right: 15%;
		text-align: right;
		float: right;
	}

    .description {
        width: 450px;
    }

    .button-action {
        margin-top: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #6227b5;
        color: white;
        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
        border-radius: 24px;
        height: 48px;
        width: 142px;
        font-weight: 600;
        user-select: none;
        cursor: pointer;
        transition: background-color, color, box-shadow;
        transition-duration: 0.2s;
    }

    .button-action:hover {
        color: #6227b5;
        background-color: white;
        box-shadow: 0px 0px 10px 0px rgba(255,255,255,0.5);
    }
</style>
