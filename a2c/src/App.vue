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
        padding: 0;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		margin: 0;
		font-weight: 400;
	}

	h1 {
		font-size: min(78px, 10vw);
		font-weight: 800;
		line-height: 100%;
		user-select: none;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: min(64px, 8vw);
		font-weight: 800;
		line-height: 100%;
		user-select: none;
		margin-bottom: 1rem;
	}

    section {
        width: max(100%, 300px);
        min-height: max(60vh, 600px);
        color: #250b47;
        display: flex;
        align-items: center;
    }

    .left {
        flex: 1;
        padding-left: 15%;
    }

	.right {
        flex: 1;
        padding-right: 10%;
        text-align: right;
	}

    .description {
        max-width: min(100%, 480px);
    }

    .right .description {
        float: right;
    }

    @media only screen and (max-width: 800px) {
        section { 
            flex-direction: column; 
        }
        .left { 
            padding-left: 10%;
            padding-right: 10%;
            width: 80%;
            padding-top: 4rem;
        }
        .right { 
            padding-left: 10%;
            padding-right: 10%;
            width: 80%;
            padding-top: 4rem;
        }
    }

    .button-action {
        margin-top: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #6227b5;
        color: white;
        box-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);
        border-radius: 24px;
        height: 48px;
        width: min(142px, 30vw);
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
