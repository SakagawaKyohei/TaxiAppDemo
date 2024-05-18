<template>
  <div
    ref="shop"
    hidden
    :data-config-load-css="false"
    id="snipcart"
    :data-api-key="props.snipcartKey"
    data-config-modal-style="side"
  ></div>
  <link ref="style" type="text/css" rel="stylesheet" :href="styleSrc" />
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import { usePointer } from "@vueuse/core";
const shop = ref(null);
const scripLoaded = ref(false);
const pointer = usePointer();
const styleSrc = ref("");
const count = ref(0);

const props = defineProps({
  snipcartKey: String,
});

const stop = watchEffect(() => {
  count.value++;

  if (
    (count.value > 1 && pointer.y.value) ||
    pointer.x.value ||
    pointer.isInside.value ||
    pointer.pointerType.value ||
    pointer.pressure.value ||
    pointer.tiltX.value ||
    pointer.twist.value ||
    pointer.width.value ||
    pointer.pointerId.value ||
    pointer.tiltY.value
  ) {
    LoadJS();
    loadCSS();
    scripLoaded.value = true;
    stop();
  }
});

function LoadJS() {
  let script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js";
  if (!scripLoaded.value) {
    document.head.appendChild(script);
  }
}

function loadCSS() {
  if (!scripLoaded.value) {
    styleSrc.value = "/snipcart.css";
  }
}

onMounted(() => {
  if (!window.Snipcart) {
    setTimeout(() => {
      LoadJS();
      loadCSS();
      scripLoaded.value = true;
    }, 2500);
  }
});
</script>

<style is:global>
#snipcart {
}
</style>
