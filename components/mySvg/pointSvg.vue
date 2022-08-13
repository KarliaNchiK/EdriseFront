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
      <filter id="e">
        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="16" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          result="filt"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
        />
      </filter>
    </defs>
    <path
      id="d"
      d="m181 121.5c0 34.518-49 81.5-104.5 50.5-50.5-2-54.5-41.982-54.5-76.5 20-23.5-44.5-106.5 67-62.5 111.5 44 116 27.5 92 88.5z"
      fill="transparent"
    />
    <path
      id="c"
      d="m181 121.5c0 34.518-50 41-104.5 50.5-50.5-2-97.905-25.5-54.5-76.5 20-23.5-53-25.5 67-62.5 120-37 74 39 92 88.5z"
      fill="transparent"
    />
    <path
      id="b"
      d="m165.5 113.5c38.5 75.5-50 41-104.5 50.5-50.5-2-67.5 22.5-54.5-76.5 20-23.5-4.4999-33.5 67-62.5 71.5-29 115 43 92 88.5z"
      fill="transparent"
    />
    <path
      id="a"
      d="m174 117c-3 116-62.5 74.5-104.5 50.5-72.5 24.5-67.5 22.5-54.5-76.5 20-23.5-78.5-46.5 67-62.5 45-75 139 19.5 92 88.5z"
      fill="transparent"
    />
    <g filter="url(#e)">
      <circle r="13">
        <animateMotion dur="21s" repeatCount="indefinite">
          <mpath xlink:href="#d" />
        </animateMotion>
      </circle>
      <circle r="15">
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath xlink:href="#c" />
        </animateMotion>
      </circle>
      <circle r="9">
        <animateMotion dur="30s" repeatCount="indefinite">
          <mpath xlink:href="#b" />
        </animateMotion>
      </circle>
      <circle r="10">
        <animateMotion dur="18s" repeatCount="indefinite">
          <mpath xlink:href="#a" />
        </animateMotion>
      </circle>
      <circle r="11">
        <animateMotion dur="11s" repeatCount="indefinite">
          <mpath xlink:href="#a" />
        </animateMotion>
      </circle>
      <circle r="17">
        <animateMotion dur="9s" repeatCount="indefinite">
          <mpath xlink:href="#b" />
        </animateMotion>
      </circle>
      <path
        d="m174 117c-13.5 32.5-62.5 74.5-104.5 50.5-108-11.5-16.5-42-54.5-76.5 20-23.5 3.5001-50.5 67-62.5 138.5-14.5 64.5 43.5 92 88.5z"
        fill="#000"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="         M174 117C160.5 149.5 111.5 191.5 69.5 167.5C-38.5 156 53 125.5 15 90.9998C35 67.5 18.5001 40.5 82.0001 28.4998C220.5 13.9999 146.5 72 174 117Z;         M181 121.5C181 156.018 132 203 76.5 172C26 170 22.0001 130.018 22.0001 95.4998C42 72 -22.4999 -11 89.0002 32.9998C200.5 76.9996 205 60.5 181 121.5Z;         M181 121.5C181 156.018 131 162.5 76.5 172C26 170 -21.4047 146.5 22.0001 95.4998C42.0001 71.9999 -30.9999 69.9999 89.0002 32.9997C209 -4.00051 163 72 181 121.5Z;         M165.5 113.5C204 189 115.5 154.5 60.9998 164C10.4998 162 -6.50021 186.5 6.49989 87.5C26.4999 64.0002 2.00003 53.9999 73.5 25C145 -4 188.5 68 165.5 113.5Z;         M174 117C171 233 111.5 191.5 69.5 167.5C-3.00003 192 1.99996 190 15.0001 90.9999C35 67.5001 -63.4999 44.4998 82.0002 28.4999C127 -46.5003 221 48 174 117Z;         M174 117C160.5 149.5 111.5 191.5 69.5 167.5C-38.5 156 53 125.5 15 90.9998C35 67.5 18.5001 40.5 82.0001 28.4998C220.5 13.9999 146.5 72 174 117Z;         "
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