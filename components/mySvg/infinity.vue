<template>
  <div>
    <!-- SVG sprite -->
    <svg style="display: none">
      <defs>
        <symbol id="loopingPath" viewBox="0 0 147.5 68">
          <title>Loading</title>
          <path
            d="M94.65,14a27.5,27.5,0,1,1-.17,39.88L52.93,14.06a27.5,27.5,0,1,0,.12,39.77Z"
            fill="none"
            stroke-miterlimit="10"
          />
        </symbol>
      </defs>
    </svg>

    <!-- Display SVG fragment -->
    <svg class="loading-spinner">
      <use id="background" xlink:href="#loopingPath" />
      <use id="master" xlink:href="#loopingPath" />
    </svg>
  </div>
</template>



<style lang="scss" scoped>
.loading-spinner {
  --looping-percent: 60;

  [id="master"],
  [id="background"] {
    stroke-width: 13;
    stroke-linecap: round; // round|butt
  }

  [id="background"] {
    stroke: var(--v-mainFirstColor-base);
    opacity: 0.25;
  }

  [id="master"] {
    // Edge don't like calc with css variables, so use Scss variables instead for calculation
    --looping-length: calc((var(--looping-percent) * 372) / 100);
    stroke: var(--v-mainSecondColor-base);
    stroke-dasharray: var(--looping-length), calc(372 - var(--looping-length));
    animation: loading-loop 1.5s linear infinite;
  }
}

@keyframes loading-loop {
  from {
    stroke-dashoffset: 372;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>