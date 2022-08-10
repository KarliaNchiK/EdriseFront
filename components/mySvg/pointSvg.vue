<template>
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 193 195"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="my-svg"
  >
    <defs>
      <filter id="filt">
        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
          result="filt"
        />
      </filter>
    </defs>
    <path
      id="path"
      d="M181 121.5C181 156.018 132 203 76.5 172C26 170 22.0001 130.018 22.0001 95.4998C42 72 -22.4999 -11 89.0002 32.9998C200.5 76.9996 205 60.5 181 121.5Z"
      fill="transparent"
    />
    <path
      id="path1"
      d="M181 121.5C181 156.018 131 162.5 76.5 172C26 170 -21.4047 146.5 22.0001 95.4998C42.0001 71.9999 -30.9999 69.9999 89.0002 32.9997C209 -4.00051 163 72 181 121.5Z"
      fill="transparent"
    />
    <path
      id="path2"
      d="M165.5 113.5C204 189 115.5 154.5 60.9998 164C10.4998 162 -6.50021 186.5 6.49989 87.5C26.4999 64.0002 2.00003 53.9999 73.5 25C145 -4 188.5 68 165.5 113.5Z"
      fill="transparent"
    />
    <path
      id="path3"
      d="M174 117C171 233 111.5 191.5 69.5 167.5C-3.00003 192 1.99996 190 15.0001 90.9999C35 67.5001 -63.4999 44.4998 82.0002 28.4999C127 -46.5003 221 48 174 117Z"
      fill="transparent"
    />

    <g filter="url(#filt)">
      <circle r="13">
        <animateMotion dur="21s" repeatCount="indefinite">
          <mpath xlink:href="#path" />
        </animateMotion>
      </circle>
      <circle r="15">
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath xlink:href="#path1" />
        </animateMotion>
      </circle>
      <circle r="9">
        <animateMotion dur="30s" repeatCount="indefinite">
          <mpath xlink:href="#path2" />
        </animateMotion>
      </circle>
      <circle r="10">
        <animateMotion dur="18s" repeatCount="indefinite">
          <mpath xlink:href="#path3" />
        </animateMotion>
      </circle>
      <circle r="11">
        <animateMotion dur="11s" repeatCount="indefinite">
          <mpath xlink:href="#path3" />
        </animateMotion>
      </circle>
      <circle r="17">
        <animateMotion dur="9s" repeatCount="indefinite">
          <mpath xlink:href="#path2" />
        </animateMotion>
      </circle>

      <path
        d="M174 117C160.5 149.5 111.5 191.5 69.5 167.5C-38.5 156 53 125.5 15 90.9998C35 67.5 18.5001 40.5 82.0001 28.4998C220.5 13.9999 146.5 72 174 117Z"
        fill="black"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
        M174 117C160.5 149.5 111.5 191.5 69.5 167.5C-38.5 156 53 125.5 15 90.9998C35 67.5 18.5001 40.5 82.0001 28.4998C220.5 13.9999 146.5 72 174 117Z;
        M181 121.5C181 156.018 132 203 76.5 172C26 170 22.0001 130.018 22.0001 95.4998C42 72 -22.4999 -11 89.0002 32.9998C200.5 76.9996 205 60.5 181 121.5Z;
        M181 121.5C181 156.018 131 162.5 76.5 172C26 170 -21.4047 146.5 22.0001 95.4998C42.0001 71.9999 -30.9999 69.9999 89.0002 32.9997C209 -4.00051 163 72 181 121.5Z;
        M165.5 113.5C204 189 115.5 154.5 60.9998 164C10.4998 162 -6.50021 186.5 6.49989 87.5C26.4999 64.0002 2.00003 53.9999 73.5 25C145 -4 188.5 68 165.5 113.5Z;
        M174 117C171 233 111.5 191.5 69.5 167.5C-3.00003 192 1.99996 190 15.0001 90.9999C35 67.5001 -63.4999 44.4998 82.0002 28.4999C127 -46.5003 221 48 174 117Z;
        M174 117C160.5 149.5 111.5 191.5 69.5 167.5C-38.5 156 53 125.5 15 90.9998C35 67.5 18.5001 40.5 82.0001 28.4998C220.5 13.9999 146.5 72 174 117Z;
        "
        />
      </path>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
.my-svg {
  overflow: visible;
  filter: drop-shadow(0 0 1px black);

  & circle {
    fill: var(--v-mainFirstColor-base);
  }
}
</style>