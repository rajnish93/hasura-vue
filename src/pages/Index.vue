<template>
    <div class="overlay">
        <div class="overlay-content">
            <div class="overlay-heading">Welcome</div>
            <div class="overlay-message">Please login to continue</div>
            <div class="overlay-action">
                <button v-on:click="handleLogin" class="login-btn">Log in</button>
            </div>
        </div>
    </div>
</template>

<script setup>
function handleLogin() {
    console.log("Login");
    router.push("/login")
}
</script>