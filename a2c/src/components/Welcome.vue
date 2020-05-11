<template>
    <div class="welcome">
        <div class="background-image"></div>
        <div class="content">
            <header>Amazing<sup>2</sup><br>Conference</header>
            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tem tempus, dui eu aliquam lobortis, mi mauris egestas lorem, at placerat orci lectus quis enim.</div>
            <div class="date">Warsaw, May 5 2020</div>
            <div class="button-action">Loading...</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "welcome",
}
</script>

<style>

    .welcome {
        position: relative;
        background-color: #6227b5;
        width: 100%;
        height: calc(100vh - 2px);
    }

    .background-image {
        position: absolute;
        background-image: url("../assets/welcome.jpg");
        background-position: center;
        background-size: cover;
        opacity: 0.6;
        height: 100%;
        width: 100%;
    }

    .content {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        font-size: 15px;
        color: white;
        padding-left: 20%;
    }

    header {
        font-size: 4vw;
        font-weight: 800;
        line-height: 100%;
        user-select: none;
        animation: example;
        animation-duration: 2s;
        margin-bottom: 35px;
    }

    sup {
        padding-left: 5px;
    }

    @keyframes example {
        from {
            opacity: 0;
            left: -100px;
        }
        to {
            opacity: 1;
            left: 0;
        }
    }

    @media screen and (min-width: 601px) {
        header {
            font-size: 78px;
        }
    }

    @media screen and (max-width: 600px) {
        header {
            font-size: 32px;
        }
    }

    .description {
        width: 450px;
    }

    .date {
        margin-top:  15px;
        font-style: italic;
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