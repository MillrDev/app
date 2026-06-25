<script>
export default {
  name: "Home",

  mounted() {
    document.title = "Apps | millrdev";
    const link =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = "/apps/favicon.svg";
    document.head.appendChild(link);
  },
};
</script>

<template>
  <main>
    <h1 class="mono">apps</h1>
    <button>
      <RouterLink to="/pump-rock">Pump Rock</RouterLink>
    </button>
  </main>
</template>
