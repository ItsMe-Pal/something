export const popUps = {
  success: (msg) => `
    <li class="notification-item success">
      <div class="notification-content">
        <div class="notification-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
      <div class="notification-progress-bar"></div>
    </li>
  `,
  info: (msg) => `
    <li class="notification-item info">
      <div class="notification-content">
        <div class="notification-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
      <div class="notification-progress-bar"></div>
    </li>
  `,
  warning: (msg) => `
    <li class="notification-item warning">
      <div class="notification-content">
        <div class="notification-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            ></path>
          </svg>
        </div>
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
      <div class="notification-progress-bar"></div>
    </li>
  `,
  error: (msg) => `
    <li class="notification-item error">
      <div class="notification-content">
        <div class="notification-icon">
           <svg width="14px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
        </div>
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
      <div class="notification-progress-bar"></div>
    </li>
  `,
  default: (msg) => `
    <li class="notification-item">
      <div class="notification-content">
        <div class="notification-icon">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            ></path>
          </svg>
        </div>
        <div class="notification-text">${msg}</div>
      </div>
      <div class="notification-icon notification-close">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          ></path>
        </svg>
      </div>
      <div class="notification-progress-bar"></div>
    </li>
  `
};